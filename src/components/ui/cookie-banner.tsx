"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("telva_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("telva_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("telva_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <div className="cookie-text">
          <p className="cookie-title">We use cookies</p>
          <p className="cookie-desc">
            We use essential cookies for authentication and analytics to improve your experience.
            See our <a href="/privacy">Privacy Policy</a> for details.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-decline" onClick={decline}>Decline</button>
          <button className="cookie-btn-accept" onClick={accept}>Accept all</button>
        </div>
      </div>
    </div>
  );
}
