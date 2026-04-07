"use client";

import { useEffect } from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <>
      <DottedSurface className="size-full fixed inset-0 -z-20 bg-[var(--bg)]" />
      <div className="nf-page">
        <div className="nf-content">
          <span className="nf-code">500</span>
          <h1 className="nf-title">Something went wrong</h1>
          <p className="nf-sub">
            An unexpected error occurred. Our team has been notified. Please try again.
          </p>
          <div className="nf-actions">
            <button className="btn-primary-solid" onClick={reset}>Try again</button>
            <a href="/" className="btn-secondary">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
