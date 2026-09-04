// Plain-assert self-check for demo-relay.js — no test framework.
// Run with: node server/api/demo-relay.test.js
const assert = require('node:assert');

process.env.APP_WEBHOOK_URL = 'https://example.invalid/webhook';
process.env.DEMO_RELAY_SHARED_SECRET = 'test-secret';

const handler = require('./demo-relay.js');

function mockRes() {
  const res = { statusCode: 200, body: null, headers: {} };
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (body) => { res.body = body; return res; };
  res.end = () => res;
  res.setHeader = (k, v) => { res.headers[k] = v; };
  return res;
}

function mockReq(overrides) {
  return {
    method: 'POST',
    headers: { origin: 'https://www.goleadsyncs.com' },
    body: {},
    socket: { remoteAddress: '1.2.3.4' },
    ...overrides,
  };
}

async function run() {
  // missing sessionId -> 400
  let res = mockRes();
  await handler(mockReq({ body: { message: 'hi' } }), res);
  assert.strictEqual(res.statusCode, 400, 'missing sessionId should 400');

  // missing message -> 400
  res = mockRes();
  await handler(mockReq({ body: { sessionId: 'a' } }), res);
  assert.strictEqual(res.statusCode, 400, 'missing message should 400');

  // message too long -> 400
  res = mockRes();
  await handler(mockReq({ body: { sessionId: 'a', message: 'x'.repeat(2001) } }), res);
  assert.strictEqual(res.statusCode, 400, 'overlong message should 400');

  // disallowed origin -> 403
  res = mockRes();
  await handler(mockReq({ headers: { origin: 'https://evil.example' }, body: { sessionId: 'a', message: 'hi' } }), res);
  assert.strictEqual(res.statusCode, 403, 'disallowed origin should 403');

  // OPTIONS preflight -> 204
  res = mockRes();
  await handler(mockReq({ method: 'OPTIONS' }), res);
  assert.strictEqual(res.statusCode, 204, 'OPTIONS should 204');

  // happy path: mock global fetch, forwards and normalizes response
  const realFetch = global.fetch;
  global.fetch = async (url, opts) => {
    assert.strictEqual(url, process.env.APP_WEBHOOK_URL);
    assert.strictEqual(JSON.parse(opts.body).message, 'hello agent');
    assert.strictEqual(opts.headers['X-Demo-Relay-Secret'], 'test-secret');
    return { ok: true, json: async () => ({ reply: 'hi there', qualified: true, booked: false }) };
  };
  res = mockRes();
  await handler(mockReq({ body: { sessionId: 'happy-path-session', message: 'hello agent' } }), res);
  assert.strictEqual(res.statusCode, 200, 'happy path should 200');
  assert.deepStrictEqual(res.body, { reply: 'hi there', qualified: true, booked: false });
  global.fetch = realFetch;

  // start: true -> no message required, forwards {sessionId, start:true}
  global.fetch = async (url, opts) => {
    const body = JSON.parse(opts.body);
    assert.strictEqual(body.start, true);
    assert.strictEqual(body.message, undefined);
    return { ok: true, json: async () => ({ reply: 'Hey, welcome!', qualified: false, booked: false }) };
  };
  res = mockRes();
  await handler(mockReq({ body: { sessionId: 'start-session', start: true } }), res);
  assert.strictEqual(res.statusCode, 200, 'start should 200 without a message');
  assert.deepStrictEqual(res.body, { reply: 'Hey, welcome!', qualified: false, booked: false });
  global.fetch = realFetch;

  // per-session turn cap: same sessionId hammered past the limit gets capped
  global.fetch = async () => ({ ok: true, json: async () => ({ reply: 'ok', qualified: false, booked: false }) });
  const sid = 'cap-test-session';
  let lastRes;
  for (let i = 0; i < 25; i++) {
    lastRes = mockRes();
    await handler(mockReq({ body: { sessionId: sid, message: 'hi ' + i } }), lastRes);
  }
  assert.strictEqual(lastRes.statusCode, 429, 'session should be turn-capped eventually');
  global.fetch = realFetch;

  console.log('demo-relay.test.js: all checks passed');
}

run().catch((err) => {
  console.error('demo-relay.test.js FAILED:', err.message);
  process.exit(1);
});
