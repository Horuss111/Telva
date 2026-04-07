"use client";

const testimonials = [
  {
    quote:
      "Switched from three separate cards to just Telva. Zero foreign fees alone saved me over $400 last quarter while traveling for client work.",
    name: "Salma Ashraf",
    role: "Founder, Luma Labs",
    initials: "SA",
    stars: 5,
  },
  {
    quote:
      "The AI spend insights are genuinely useful — not just charts. It caught a duplicate subscription I'd forgotten about within the first week.",
    name: "Tarek Diab",
    role: "Senior Engineer, Vercel",
    initials: "TD",
    stars: 5,
  },
  {
    quote:
      "Instant virtual card on approval meant I could use it before my physical card even shipped. The whole experience felt like the future.",
    name: "Karim Diab",
    role: "Product Designer, Figma",
    initials: "KD",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <p className="section-eyebrow">What cardholders say</p>
        <h2 className="section-title">Trusted by people<br />who move fast</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
