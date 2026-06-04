import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'LeadSync Privacy Policy — learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050816', color: '#e2e8f0' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: '#a78bfa' }}>
          ← Back to LeadSync
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: '#64748b' }}>Last updated: June 4, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Introduction</h2>
            <p>LeadSync ("Company", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our platform at goleadsyncs.com (the "Service"). By using the Service, you consent to the practices described in this policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3"><strong className="text-white">Information you provide directly:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
              <li>Account registration details (name, email address, company name).</li>
              <li>Billing information processed securely via our payment processors.</li>
              <li>Communications with our support team.</li>
              <li>Configuration data, AI agent settings, and lead data you upload.</li>
            </ul>
            <p className="mb-3"><strong className="text-white">Information collected automatically:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Usage data (pages visited, features used, session duration).</li>
              <li>Device and browser information (IP address, browser type, operating system).</li>
              <li>Cookies and similar tracking technologies (see Section 7).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide, operate, and maintain the Service.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send transactional emails (receipts, account alerts).</li>
              <li>Send marketing communications where you have opted in.</li>
              <li>Analyze usage to improve the Service.</li>
              <li>Comply with legal obligations.</li>
              <li>Detect and prevent fraud or abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Legal Basis for Processing (GDPR)</h2>
            <p className="mb-3">If you are located in the European Economic Area (EEA), our legal bases for processing your personal data include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-white">Contract performance</strong> — processing necessary to deliver the Service you subscribed to.</li>
              <li><strong className="text-white">Legitimate interests</strong> — improving our Service and preventing fraud.</li>
              <li><strong className="text-white">Consent</strong> — for marketing communications; you may withdraw consent at any time.</li>
              <li><strong className="text-white">Legal obligation</strong> — where required by applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Data Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-white">Service providers</strong> — payment processors, cloud hosting, analytics tools, and customer support platforms, who are contractually obligated to protect your data.</li>
              <li><strong className="text-white">Third-party integrations</strong> — platforms like GoHighLevel that you explicitly connect to your account.</li>
              <li><strong className="text-white">Legal authorities</strong> — when required by law, court order, or to protect the rights and safety of our users.</li>
              <li><strong className="text-white">Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active or as necessary to provide the Service. Upon account deletion, we will delete or anonymize your data within 90 days, unless we are required to retain it longer by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Cookies</h2>
            <p className="mb-3">We use cookies and similar technologies to operate the Service, remember your preferences, and analyze traffic. Types of cookies we use:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-white">Essential cookies</strong> — required for the Service to function.</li>
              <li><strong className="text-white">Analytics cookies</strong> — help us understand how users interact with the Service.</li>
              <li><strong className="text-white">Marketing cookies</strong> — used to deliver relevant advertising where applicable.</li>
            </ul>
            <p className="mt-3">You can control cookies through your browser settings. Disabling certain cookies may affect Service functionality.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">8. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">9. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Request a portable copy of your data.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">10. Children's Privacy</h2>
            <p>The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">11. International Data Transfers</h2>
            <p>Your data may be processed and stored in countries outside your own, including the United States. We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy and applicable data protection law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">13. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@goleadsyncs.com" style={{ color: '#a78bfa' }}>hello@goleadsyncs.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
