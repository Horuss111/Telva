import { DottedSurface } from "@/components/ui/dotted-surface";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { NavClient } from "@/components/ui/nav-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Telva",
  description: "The terms and conditions governing your use of Telva.",
};

export default function TermsPage() {
  return (
    <>
      <DottedSurface className="size-full fixed inset-0 -z-20 bg-[var(--bg)]" />
      <div className="page-wrapper">
        <div className="center-col">
          <GlassNavbar><NavClient /></GlassNavbar>
          <article className="legal-page">
            <header className="legal-header">
              <p className="section-eyebrow">Legal</p>
              <h1 className="legal-title">Terms of Service</h1>
              <p className="legal-meta">Last updated: April 6, 2026</p>
            </header>

            <div className="legal-body">
              <section>
                <h2>1. Acceptance of terms</h2>
                <p>By accessing or using the Telva website (telva.co) or applying for a Telva card, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
              </section>

              <section>
                <h2>2. Eligibility</h2>
                <p>To apply for a Telva card you must:</p>
                <ul>
                  <li>Be at least 18 years of age.</li>
                  <li>Be a legal resident or citizen of a country where Telva services are available.</li>
                  <li>Provide accurate and complete information during the application process.</li>
                  <li>Not be prohibited by applicable law from receiving financial services.</li>
                </ul>
              </section>

              <section>
                <h2>3. Card application</h2>
                <p>Submitting a card application does not guarantee approval. Telva reserves the right to approve or decline any application at its sole discretion, subject to applicable law. We may conduct identity verification and soft credit checks as part of the review process. Providing false or misleading information is grounds for immediate rejection or termination of your account.</p>
              </section>

              <section>
                <h2>4. Use of the card</h2>
                <p>Approved Telva cards may be used for lawful purchases and transactions only. You agree not to use your Telva card for:</p>
                <ul>
                  <li>Any illegal activities, including money laundering or fraud.</li>
                  <li>Purchases prohibited by applicable law in your jurisdiction.</li>
                  <li>Any activity that violates the rules of the applicable card network (Visa or Mastercard).</li>
                </ul>
              </section>

              <section>
                <h2>5. Fees and charges</h2>
                <p>Telva charges zero annual fees, zero foreign transaction fees, and zero card issuance fees as stated at the time of application. We reserve the right to introduce new fees with at least 30 days&apos; prior written notice. ATM withdrawals beyond the free monthly allowance may be subject to charges as disclosed in your cardholder agreement.</p>
              </section>

              <section>
                <h2>6. Account security</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorised access or suspected security breach. Telva is not liable for losses resulting from unauthorised use of your account due to your failure to keep credentials secure.</p>
              </section>

              <section>
                <h2>7. Intellectual property</h2>
                <p>All content on the Telva website — including text, graphics, logos, and software — is the property of Telva, Inc. and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
              </section>

              <section>
                <h2>8. Disclaimer of warranties</h2>
                <p>The Telva website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be uninterrupted, error-free, or free of viruses.</p>
              </section>

              <section>
                <h2>9. Limitation of liability</h2>
                <p>To the maximum extent permitted by applicable law, Telva, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, goodwill, or other intangible losses arising from your use of or inability to use our services.</p>
              </section>

              <section>
                <h2>10. Termination</h2>
                <p>We reserve the right to suspend or terminate your account and access to Telva services at any time, with or without cause, with reasonable notice except in cases of fraud, illegal activity, or security threats where immediate action may be necessary.</p>
              </section>

              <section>
                <h2>11. Governing law</h2>
                <p>These Terms of Service are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts.</p>
              </section>

              <section>
                <h2>12. Changes to these terms</h2>
                <p>We may modify these Terms of Service at any time. We will provide at least 30 days&apos; notice of material changes via email or a prominent notice on our website. Continued use of our services after the effective date constitutes acceptance of the revised terms.</p>
              </section>

              <section>
                <h2>13. Contact us</h2>
                <p>For questions about these Terms of Service:</p>
                <p><strong>Telva, Inc.</strong><br />
                Email: <a href="mailto:legal@telva.co">legal@telva.co</a><br />
                WhatsApp: <a href="https://wa.me/201006741810">+20 100 674 1810</a></p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
