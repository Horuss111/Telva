import { DottedSurface } from "@/components/ui/dotted-surface";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { NavClient } from "@/components/ui/nav-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Telva",
  description: "How Telva collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <DottedSurface className="size-full fixed inset-0 -z-20 bg-[var(--bg)]" />
      <div className="page-wrapper">
        <div className="center-col">
          <GlassNavbar><NavClient /></GlassNavbar>
          <article className="legal-page">
            <header className="legal-header">
              <p className="section-eyebrow">Legal</p>
              <h1 className="legal-title">Privacy Policy</h1>
              <p className="legal-meta">Last updated: April 6, 2026</p>
            </header>

            <div className="legal-body">
              <section>
                <h2>1. Who we are</h2>
                <p>Telva, Inc. (&ldquo;Telva&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at telva.co and provides premium payment card services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or apply for a Telva card.</p>
              </section>

              <section>
                <h2>2. Information we collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul>
                  <li><strong>Identity data:</strong> first name, last name, date of birth.</li>
                  <li><strong>Contact data:</strong> email address, phone number, postal address.</li>
                  <li><strong>Financial data:</strong> employment status, annual income range.</li>
                  <li><strong>Technical data:</strong> IP address, browser type, device identifiers, cookies, and usage data collected automatically.</li>
                  <li><strong>Authentication data:</strong> managed by Clerk, Inc. — see Clerk&apos;s privacy policy for details.</li>
                </ul>
              </section>

              <section>
                <h2>3. How we use your information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process and evaluate card applications.</li>
                  <li>Send transactional emails confirming your application status.</li>
                  <li>Comply with legal and regulatory obligations (KYC/AML).</li>
                  <li>Detect, prevent, and investigate fraud and security incidents.</li>
                  <li>Improve our website and services through aggregated analytics.</li>
                  <li>Respond to your enquiries and provide customer support.</li>
                </ul>
              </section>

              <section>
                <h2>4. Legal basis for processing (GDPR)</h2>
                <p>If you are in the European Economic Area, we process your personal data under the following legal bases:</p>
                <ul>
                  <li><strong>Contract performance:</strong> processing necessary to evaluate and fulfil your card application.</li>
                  <li><strong>Legal obligation:</strong> compliance with KYC, AML, and financial regulations.</li>
                  <li><strong>Legitimate interests:</strong> fraud prevention, security, and service improvement.</li>
                  <li><strong>Consent:</strong> analytics cookies where required.</li>
                </ul>
              </section>

              <section>
                <h2>5. Cookies</h2>
                <p>We use the following categories of cookies:</p>
                <ul>
                  <li><strong>Essential:</strong> required for authentication (Clerk) and core site functionality. Cannot be disabled.</li>
                  <li><strong>Analytics:</strong> Vercel Analytics collects anonymous, aggregated data to help us understand site usage. No personal identifiers are stored.</li>
                </ul>
                <p>You may decline non-essential cookies via the banner displayed on your first visit. Existing cookies can be cleared through your browser settings.</p>
              </section>

              <section>
                <h2>6. Third-party services</h2>
                <p>We share data with the following trusted third parties solely to provide our services:</p>
                <ul>
                  <li><strong>Clerk, Inc.</strong> — authentication and identity management.</li>
                  <li><strong>Resend, Inc.</strong> — transactional email delivery.</li>
                  <li><strong>Vercel, Inc.</strong> — hosting and analytics.</li>
                </ul>
                <p>We do not sell your personal data to any third party.</p>
              </section>

              <section>
                <h2>7. Data retention</h2>
                <p>We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. Application data is retained for a minimum of five years to comply with financial regulations. You may request deletion of your data at any time (subject to legal retention requirements).</p>
              </section>

              <section>
                <h2>8. Your rights</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you.</li>
                  <li>Correct inaccurate or incomplete data.</li>
                  <li>Request erasure of your data (right to be forgotten).</li>
                  <li>Object to or restrict certain processing activities.</li>
                  <li>Data portability — receive your data in a structured, machine-readable format.</li>
                  <li>Withdraw consent at any time where processing is based on consent.</li>
                </ul>
                <p>To exercise any of these rights, contact us at <a href="mailto:privacy@telva.co">privacy@telva.co</a>.</p>
              </section>

              <section>
                <h2>9. Security</h2>
                <p>We implement industry-standard security measures including 256-bit AES encryption, TLS in transit, and PCI-DSS Level 1 compliance to protect your personal data. No method of transmission over the internet is 100% secure; however, we continuously review and update our security practices.</p>
              </section>

              <section>
                <h2>10. International transfers</h2>
                <p>Your data may be transferred to and processed in countries outside your own. Where we transfer data from the EEA, we ensure adequate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.</p>
              </section>

              <section>
                <h2>11. Changes to this policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised policy.</p>
              </section>

              <section>
                <h2>12. Contact us</h2>
                <p>For any questions about this Privacy Policy or our data practices, please contact:</p>
                <p><strong>Telva, Inc.</strong><br />
                Email: <a href="mailto:privacy@telva.co">privacy@telva.co</a><br />
                WhatsApp: <a href="https://wa.me/201006741810">+20 100 674 1810</a></p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
