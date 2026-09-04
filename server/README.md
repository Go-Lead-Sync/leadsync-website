# leadsync-demo-relay

Thin serverless relay between the marketing-site chat widget and the real
LeadSync agent on app.goleadsyncs.com (see `APP_SIDE_BRIEF.md`). Deployed as
its own Vercel project, separate from the static site on GitHub Pages.

## Deploying

```
cd server
vercel deploy --prod --yes
```

**Deploy manually, from inside this `/server` directory, every time.**

GitHub auto-deploy is intentionally **disconnected** for this project
(`vercel git disconnect`). It was connected briefly and broke production:
a push to the parent `ls-web` repo (for an unrelated marketing-site change)
triggered an auto-deploy that built from the *repo root* instead of this
`/server` subfolder, silently replacing the working deployment with one that
had no `/api/demo-relay` route at all (404s on the live widget, no error
anywhere obvious). If you ever reconnect GitHub for this project, set
**Root Directory = `server`** in the Vercel project settings first, and
confirm a real end-to-end test (not just "build succeeded") before trusting
it.

## Deployment Protection

SSO/Vercel Authentication protection must stay **disabled** for this
project — it's a public, unauthenticated-by-design endpoint (its real auth
is the shared secret + Origin check forwarded to the app webhook, not a
Vercel login wall). If deployment protection ever gets re-enabled (team
default policies sometimes apply it to new projects automatically), the
widget will start getting 401/404s with no application-level error to
explain why. Check with:

```
vercel project protection leadsync-demo-relay
```

`ssoProtection` should be `null`/`false`. If not:

```
vercel project protection disable leadsync-demo-relay --sso
```
