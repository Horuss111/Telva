"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is there an annual fee?",
    a: "No. Telva has zero annual fees, zero foreign transaction fees, and zero maintenance charges. You only ever pay for what you spend.",
  },
  {
    q: "Will applying affect my credit score?",
    a: "No. Our initial application process uses a soft credit check only, which has no impact on your credit score whatsoever.",
  },
  {
    q: "How quickly will I get a decision?",
    a: "Our AI-powered review delivers a decision in seconds — not days. Most applicants hear back before they've finished their coffee.",
  },
  {
    q: "Can I use Telva internationally?",
    a: "Yes. Telva is accepted in 150+ countries on the Visa and Mastercard networks. You'll always get the real interbank exchange rate with no markup.",
  },
  {
    q: "How is my card secured?",
    a: "Every transaction is protected with 256-bit AES encryption. You can freeze, unfreeze, or set spending limits instantly from the app. We are PCI-DSS Level 1 compliant.",
  },
  {
    q: "When does my physical card arrive?",
    a: "Virtual cards are available immediately on approval. Physical cards are dispatched within 1 business day and typically arrive in 3–5 business days.",
  },
  {
    q: "What currencies can I hold?",
    a: "Telva supports 150+ currencies. You can hold and convert between them at real exchange rates with no hidden spread.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <p className="section-eyebrow">Questions & Answers</p>
        <h2 className="section-title">Everything you<br />need to know</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "faq-item-open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <svg
                className="faq-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
