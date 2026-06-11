require('dotenv').config();
const express = require('express');
const path = require('path');
const { Resend } = require('resend');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = 'LeadSync <noreply@goleadsyncs.com>';
const OWNER_EMAIL = 'kmv736@gmail.com';
const APP_URL = 'https://app.goleadsyncs.com/register';
const PORT = process.env.PORT || 3001;

if (!resend) console.warn('⚠️  RESEND_API_KEY not set — emails will be logged only');

function welcomeHtml(firstName) {
  const name = firstName || 'there';
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:linear-gradient(135deg,#0a0118,#1a0a2e);color:#fff;padding:20px}
.wrap{max-width:600px;margin:0 auto;padding:40px 20px}
.logo{text-align:center;font-size:32px;font-weight:800;background:linear-gradient(135deg,#8B5CF6,#EC4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px}
.tag{text-align:center;color:rgba(255,255,255,.45);font-size:13px;margin-bottom:36px}
.card{background:rgba(26,10,46,.9);border:1px solid rgba(139,92,246,.3);border-radius:16px;padding:36px}
.card h2{color:#fff;margin-bottom:14px;font-size:21px}
.card p{color:rgba(255,255,255,.85);line-height:1.7;margin-bottom:12px;font-size:15px}
.hl{background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.3);border-radius:9px;padding:15px 18px;margin:18px 0}
.hl p{color:#4ade80;font-weight:700;margin:0;font-size:15px}
.feats{background:rgba(139,92,246,.07);border:1px solid rgba(139,92,246,.2);border-radius:11px;padding:18px 22px;margin:18px 0}
.feats p{margin:8px 0;font-size:14px;color:rgba(255,255,255,.8)}
.btn{display:inline-block;padding:15px 38px;background:linear-gradient(135deg,#8B5CF6,#EC4899);color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:16px;margin:14px 0 22px}
.footer{text-align:center;margin-top:28px;color:rgba(255,255,255,.35);font-size:12px;line-height:1.7}
</style></head><body>
<div class="wrap">
  <div class="logo">LeadSync</div>
  <div class="tag">AI-Powered Lead Management &amp; Automation</div>
  <div class="card">
    <h2>Welcome to LeadSync, ${name}!</h2>
    <p>Your 14-day free trial is ready. You have full access to everything — no credit card, no commitment.</p>
    <div class="hl"><p>&#10003; Your free trial is active. No charge for 14 days.</p></div>
    <p>Here's what you can start doing right now:</p>
    <div class="feats">
      <p>&#129302; Build your first AI agent in the Flow Editor</p>
      <p>&#128218; Train your knowledge base on your business</p>
      <p>&#128279; Connect your GoHighLevel account</p>
      <p>&#129514; Test your AI in the Playground</p>
      <p>&#128197; Set up automated appointment booking</p>
    </div>
    <p>Click below to create your account and get started:</p>
    <center><a href="${APP_URL}" class="btn">Create My Account &rarr;</a></center>
    <p style="font-size:13px;color:rgba(255,255,255,.45);margin-top:8px">Questions? Just reply to this email.</p>
    <p style="margin-top:22px;margin-bottom:0">Talk soon,<br><strong>The LeadSync Team</strong></p>
  </div>
  <div class="footer">
    <p>LeadSync &mdash; AI-Powered Lead Management &amp; Automation</p>
    <p>&copy; 2026 LeadSync. All rights reserved.</p>
  </div>
</div></body></html>`;
}

function notifyHtml(data) {
  const { firstName, lastName, email, phone, businessType, businessTypeOther } = data;
  const biz = businessType === 'Other' ? (businessTypeOther || 'Other') : businessType;
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
body{font-family:-apple-system,sans-serif;background:#0a0118;color:#fff;padding:20px}
.wrap{max-width:480px;margin:0 auto;padding:28px 16px}
.card{background:rgba(26,10,46,.9);border:1px solid rgba(139,92,246,.3);border-radius:14px;padding:26px}
h2{color:#fff;margin-bottom:18px;font-size:17px}
.row{background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.14);border-radius:8px;padding:11px 14px;margin-bottom:9px}
.row label{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(139,92,246,.8);display:block;margin-bottom:3px}
.row span{font-size:14px;color:#fff}
</style></head><body>
<div class="wrap"><div class="card">
  <h2>&#128293; New Trial Signup!</h2>
  <div class="row"><label>Name</label><span>${firstName} ${lastName}</span></div>
  <div class="row"><label>Email</label><span>${email}</span></div>
  <div class="row"><label>Phone</label><span>${phone}</span></div>
  <div class="row"><label>Business Type</label><span>${biz}</span></div>
</div></div></body></html>`;
}

app.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, businessType, businessTypeOther } = req.body;

    if (!firstName || !lastName || !email || !phone || !businessType) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    if (businessType === 'Other' && !businessTypeOther) {
      return res.status(400).json({ error: 'Please describe your business type.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (resend) {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: 'Your LeadSync free trial is ready',
        html: welcomeHtml(firstName),
      });

      resend.emails.send({
        from: FROM,
        to: OWNER_EMAIL,
        subject: `New trial: ${firstName} ${lastName} — ${businessType === 'Other' ? businessTypeOther : businessType}`,
        html: notifyHtml(req.body),
      }).catch(err => console.error('Owner notify failed:', err.message));
    } else {
      console.log('[DEV] New signup:', { firstName, lastName, email, phone, businessType, businessTypeOther });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n  LeadSync website running at http://localhost:${PORT}\n`);
});
