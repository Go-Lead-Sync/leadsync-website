# Brief for the app.goleadsyncs.com Claude Code session

Paste this whole file into that session. It has zero context on what's below —
this is meant to be self-contained.

## What this is

LeadSync's marketing site (www.goleadsyncs.com, a separate static repo) is
getting a real, live AI chat widget on the homepage, replacing a fake/static
chat mockup. Instead of building a second, fake AI just for marketing, the
marketing site will call through to the **real** LeadSync agent — the same
engine that powers the Playground (Strategies → AI Agent → Playground) —
via a new, private, locked-down webhook that lives in **this** codebase
(app.goleadsyncs.com).

The marketing site's backend (a small relay, already built, in the other
repo) will POST to a URL you expose here. It never calls an LLM or touches
a calendar itself — it's a dumb pipe. All the actual agent logic, training,
and booking action already exist in this product; this task is just about
exposing one existing agent's conversation engine over a new, safe, public
HTTP endpoint.

## What to build here

**One new endpoint**, e.g. `POST /api/public/demo-agent` (exact path/route
naming is your call — fit it to how this codebase already organizes routes).

### Request it will receive
```json
{
  "sessionId": "a-client-generated-uuid-stable-per-browser-session",
  "message": "the visitor's chat message, plain text, max ~2000 chars"
}
```

### Response it must return
```json
{
  "reply": "the agent's plain-text reply",
  "qualified": false,
  "booked": false
}
```
- `qualified`: true once the agent has decided this visitor is a real
  qualified lead (however that's already determined internally for a normal
  customer conversation — reuse that signal, don't invent a new one).
- `booked`: true once the agent has actually booked a meeting (its existing
  booking action fired successfully).
- If you don't have a clean existing signal for `qualified`, it's fine to
  return `false` always for now and only set `booked` accurately — the
  marketing-site widget degrades gracefully either way.

### Auth — this is the important part

The caller is a **server**, not a logged-in user, so do not check session
cookies or user auth. Instead:

1. Require a header `X-Demo-Relay-Secret` and compare it (constant-time
   compare, not `===`, to avoid timing attacks) against an env var you set
   here, e.g. `DEMO_RELAY_SHARED_SECRET`. Reject with 401 if missing/wrong.
2. **The exact secret value to use is:**
   ```
   OW3BJ-QXXhqLMgtS68lxJIu0qlI7KzJFQC-YR9vWNcA
   ```
   Set this as an env var in this project's hosting (production only — this
   is not something that should ever reach a browser or a committed file).
   The marketing site's relay is already configured to send this exact value.
3. As a second layer, also check the request's `Origin` or `Referer` header
   is `https://www.goleadsyncs.com` and reject otherwise.

### Must be locked to exactly ONE agent

This endpoint must always run the message through **one specific,
pre-configured agent** — never let the caller specify which agent to talk
to (no `agentId` in the request body, and don't accept one even if sent).
Hardcode the agent ID/reference server-side.

That agent is: **a new agent you (the user) will create manually** in the
dashboard, named something like "LeadSync Demo (Marketing Site)", trained on
LeadSync's own product info (pricing, features, FAQ, objection handling —
this is a manual dashboard task, not something to build in code), with its
booking action configured to point at either a Google Calendar or a GHL
calendar in the agency's own account (not a real customer's). Once that
agent exists and has an ID, wire this endpoint to it.

### Conversation state

Use `sessionId` to maintain multi-turn conversation state the same way the
Playground already does per test session — reuse whatever mechanism already
backs "continue this test conversation" in the Playground, keyed by
`sessionId` instead of whatever key the Playground UI currently uses.

### Rate limiting

This endpoint is public and unauthenticated-by-user, and every call costs
real product/LLM spend, same as a real customer message. Add rate limiting
here too (per IP and/or per sessionId) — don't rely solely on the relay's
best-effort limiting on the marketing-site side.

### Visibility requirement — important

Conversations that come through this endpoint **must show up as normal
conversations/leads in the dashboard**, in the same place real customer
conversations are reviewed — this is how the user monitors and keeps
training/tuning the demo agent over time. Tag or label them clearly as
marketing-site-origin (a source field, a tag, whatever pattern this
codebase already uses to distinguish lead sources) so they're
distinguishable from real customer leads, but they must **not** be hidden
or siloed from the normal conversation view.

### Error handling

If anything internally fails, return a 200 with a safe generic `reply`
rather than a raw 500 where possible — the marketing-site relay already has
its own fallback messaging for actual network/5xx failures, but a graceful
in-character reply from the agent itself is a better visitor experience
than an error bubbling up.

## What NOT to build here

- No new LLM integration — reuse the existing agent engine.
- No new calendar API integration — the agent's existing booking action
  handles that; this endpoint doesn't need to know or care whether it's
  Google Calendar or GHL.
- No public "pick your agent" capability — one hardcoded agent only.

## Questions to flag back if anything here doesn't fit this codebase's
reality (e.g. if there's no existing per-session Playground state mechanism
to reuse, or if the qualified/booked signals don't cleanly exist yet) rather
than guessing — better to surface the gap than build something that quietly
doesn't work.
