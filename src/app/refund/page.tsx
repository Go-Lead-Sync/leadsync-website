import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'LeadSync Refund Policy — learn about our 30-day money-back guarantee and refund process.',
};

export default function RefundPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050816', color: '#e2e8f0' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: '#a78bfa' }}>
          ← Back to LeadSync
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-2">Refund Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>Last updated: June 4, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>

          <section>
            <div
              className="rounded-xl p-5 mb-8 flex items-start gap-4"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}
            >
              <div className="text-2xl mt-0.5">🛡️</div>
              <div>
                <div className="font-bold text-white mb-1">30-Day Money-Back Guarantee</div>
                <div style={{ color: '#6ee7b7' }}>
                  We stand behind LeadSync. If you're not satisfied within 30 days of your first paid charge, we'll give you a full refund — no questions asked.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. 30-Day Money-Back Guarantee</h2>
            <p className="mb-3">If you are not completely satisfied with LeadSync, you may request a full refund within <strong className="text-white">30 days</strong> of your first paid charge (i.e., after your 14-day free trial ends and your first payment is processed).</p>
            <p>To request a refund under this guarantee, simply email us at <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a> with the subject line "Refund Request" and we will process your refund within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Free Trial Period</h2>
            <p>All plans include a 14-day free trial. No credit card is required to start. You will not be charged anything during the trial period. If you cancel before the trial ends, you will not be billed.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Subscription Cancellations</h2>
            <p className="mb-3">You may cancel your subscription at any time from your account dashboard. Cancellations take effect at the end of your current billing period.</p>
            <p>After the 30-day money-back window, we do not provide prorated refunds for unused time within a billing period. Your access to the Service will continue until the end of the period you have already paid for.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Annual Plans</h2>
            <p>Annual subscriptions are eligible for the 30-day money-back guarantee from the date of the first charge. After 30 days, annual subscriptions are non-refundable. If you cancel an annual plan after the 30-day window, you will retain access until the end of the annual term.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. One-Time Setup Fees</h2>
            <p>The one-time setup fee for the Launch Sync Unlimited plan covers done-for-you agent building and onboarding work that begins immediately upon payment. This fee is <strong className="text-white">non-refundable</strong> once work has commenced. If you cancel before any work has begun, please contact us within 48 hours of payment to request a refund of the setup fee.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Exceptions</h2>
            <p className="mb-3">Refunds may be declined in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The refund request is made after the 30-day money-back window has expired.</li>
              <li>The account has been suspended or terminated due to a violation of our <Link href="/terms" style={{ color: '#a78bfa' }}>Terms of Service</Link>.</li>
              <li>The request relates to a one-time setup fee after work has commenced.</li>
              <li>Fraudulent or abusive refund requests (e.g., repeated sign-ups to obtain multiple free trials).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Processing Time</h2>
            <p>Approved refunds are processed within 5–10 business days. The time for the refund to appear on your statement depends on your bank or card issuer and may take an additional 3–5 business days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">8. How to Request a Refund</h2>
            <p className="mb-3">To request a refund, please email <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a> with:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Subject line: "Refund Request"</li>
              <li>Your account email address.</li>
              <li>The reason for your request (optional but appreciated).</li>
            </ul>
            <p className="mt-3">Our team will respond within 1–2 business days to confirm or follow up on your request.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">9. Contact</h2>
            <p>Questions about this policy? Reach us at <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
