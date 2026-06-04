import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'LeadSync Terms of Service — read about the rules and guidelines governing your use of the LeadSync platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050816', color: '#e2e8f0' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: '#a78bfa' }}>
          ← Back to LeadSync
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>Last updated: June 4, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using LeadSync ("Service"), operated by LeadSync ("Company", "we", "us", or "our") at goleadsyncs.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Description of Service</h2>
            <p>LeadSync is an AI-powered lead management platform that automates lead qualification, appointment booking, and follow-up via conversational AI. The Service integrates with GoHighLevel and other CRM platforms to help businesses manage and convert leads.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old and have the legal authority to enter into a binding contract to use the Service. By using LeadSync, you represent and warrant that you meet these requirements.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Account Registration</h2>
            <p>You must create an account to use LeadSync. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately at hello@goleadsyncs.com if you suspect any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Subscriptions and Billing</h2>
            <p className="mb-3">LeadSync offers monthly and annual subscription plans. All fees are stated in US dollars and are exclusive of applicable taxes unless otherwise stated. By subscribing, you authorize us to charge your payment method on a recurring basis.</p>
            <p className="mb-3">You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. We do not provide prorated refunds for unused time within a billing period, except as outlined in our Refund Policy.</p>
            <p>We reserve the right to change pricing with at least 30 days' notice. Continued use of the Service after a price change constitutes your acceptance of the new pricing.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Free Trial</h2>
            <p>LeadSync offers a 14-day free trial. No credit card is required to start. If you do not cancel before the end of the trial period, you will be charged the applicable subscription fee. We reserve the right to modify or discontinue the free trial at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Acceptable Use</h2>
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Send spam, unsolicited messages, or violate anti-spam laws (including CAN-SPAM and GDPR).</li>
              <li>Harass, threaten, or deceive any person.</li>
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Reverse engineer, decompile, or attempt to extract source code from the Service.</li>
              <li>Resell or sublicense access to the Service without express written consent.</li>
              <li>Transmit malware, viruses, or any harmful code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">8. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are owned by LeadSync and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">9. Your Data</h2>
            <p>You retain ownership of all data you upload or create through the Service. By using LeadSync, you grant us a limited license to process your data solely to provide and improve the Service. We will not sell your data to third parties. For full details, please review our <Link href="/privacy" style={{ color: '#a78bfa' }}>Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">10. Third-Party Integrations</h2>
            <p>The Service may integrate with third-party platforms such as GoHighLevel. We are not responsible for the actions, content, or practices of any third-party services. Your use of third-party integrations is subject to their respective terms and privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">11. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Service will be uninterrupted, error-free, or that any specific results will be achieved.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, LeadSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Service. Our total aggregate liability shall not exceed the amount you paid to us in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">13. Termination</h2>
            <p>We reserve the right to suspend or terminate your account and access to the Service at our discretion if you violate these Terms or engage in conduct we reasonably believe is harmful to other users or the Company. Upon termination, your right to use the Service ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">14. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with applicable law. Any disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction, as applicable.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">15. Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Continued use of the Service after changes constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">16. Contact</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
