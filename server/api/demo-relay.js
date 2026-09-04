// Thin, secure relay between the marketing-site chat widget and the real
// LeadSync agent running on app.goleadsyncs.com. This function does NOT call
// an LLM and does NOT talk to any calendar API — it only forwards a message
// to the app's private webhook (with a shared secret the browser never sees)
// and relays the reply back.
//
// ponytail: rate limiting is a best-effort in-memory counter, not a
// distributed store. It resets on cold start and doesn't share state across
// concurrent instances. That's a known, accepted ceiling for v1 — upgrade to
// Upstash Redis (or similar) only if real abuse shows up in practice.

const ALLOWED_ORIGIN = 'https://www.goleadsyncs.com';
const MAX_MESSAGE_LEN = 2000;
const MAX_REQUESTS_PER_IP_PER_WINDOW = 20;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_TURNS_PER_SESSION = 20;
const UPSTREAM_TIMEOUT_MS = 15000;

// In-memory, best-effort only (see note above).
const ipHits = new Map(); // ip -> { count, windowStart }
const sessionTurns = new Map(); // sessionId -> count

function isAllowedOrigin(origin) {
  if (!origin) return true; // server-to-server / curl testing, no browser Origin header
  if (origin === ALLOWED_ORIGIN) return true;
  if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return true; // local dev
  return false;
}

function setCors(req, res) {
  const origin = req.headers.origin;
  if (isAllowedOrigin(origin) && origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  return req.socket && req.socket.remoteAddress || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const hit = ipHits.get(ip);
  if (!hit || now - hit.windowStart > WINDOW_MS) {
    ipHits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  hit.count += 1;
  return hit.count > MAX_REQUESTS_PER_IP_PER_WINDOW;
}

function sessionCapped(sessionId) {
  const count = (sessionTurns.get(sessionId) || 0) + 1;
  sessionTurns.set(sessionId, count);
  return count > MAX_TURNS_PER_SESSION;
}

module.exports = async (req, res) => {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }
  if (!isAllowedOrigin(req.headers.origin)) {
    res.status(403).json({ error: 'forbidden origin' });
    return;
  }

  const { sessionId, message, start } = req.body || {};
  if (typeof sessionId !== 'string' || !sessionId.trim()) {
    res.status(400).json({ error: 'sessionId is required' });
    return;
  }
  const isStart = start === true;
  if (!isStart) {
    if (typeof message !== 'string' || !message.trim()) {
      res.status(400).json({ error: 'message is required' });
      return;
    }
    if (message.length > MAX_MESSAGE_LEN) {
      res.status(400).json({ error: 'message too long' });
      return;
    }
  }

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    res.status(429).json({ error: 'too many requests, slow down' });
    return;
  }
  if (sessionCapped(sessionId)) {
    res.status(429).json({
      reply: "We've covered a lot here! Let's continue this on a real call — grab a time that works for you.",
      qualified: true,
      booked: false,
    });
    return;
  }

  if (!process.env.APP_WEBHOOK_URL || !process.env.DEMO_RELAY_SHARED_SECRET) {
    res.status(500).json({ error: 'relay not configured' });
    return;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
    const upstream = await fetch(process.env.APP_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Demo-Relay-Secret': process.env.DEMO_RELAY_SHARED_SECRET,
      },
      body: JSON.stringify(isStart ? { sessionId, start: true } : { sessionId, message }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!upstream.ok) {
      res.status(502).json({
        reply: "Sorry, our AI agent is having a moment. Try again in a few seconds, or book a call directly.",
        qualified: false,
        booked: false,
      });
      return;
    }

    const data = await upstream.json();
    res.status(200).json({
      reply: typeof data.reply === 'string' ? data.reply : "Sorry, something went wrong on our end.",
      qualified: !!data.qualified,
      booked: !!data.booked,
    });
  } catch (err) {
    res.status(502).json({
      reply: "Sorry, our AI agent didn't respond in time. Try again, or book a call directly.",
      qualified: false,
      booked: false,
    });
  }
};
