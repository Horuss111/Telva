import { DottedSurface } from "@/components/ui/dotted-surface";

export default function NotFound() {
  return (
    <>
      <DottedSurface className="size-full fixed inset-0 -z-20 bg-[var(--bg)]" />
      <div className="nf-page">
        <div className="nf-content">
          <span className="nf-code">404</span>
          <h1 className="nf-title">Page not found</h1>
          <p className="nf-sub">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="nf-actions">
            <a href="/" className="btn-primary-solid">Go home</a>
            <a href="/request-card" className="btn-secondary">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              Request a card
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
