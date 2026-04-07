import { SignUp } from "@clerk/nextjs";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function SignUpPage() {
  return (
    <>
      <DottedSurface className="size-full fixed inset-0 -z-20 bg-[var(--bg)]" />
      <div className="auth-page">
        <a href="/" className="auth-logo">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Telva
        </a>
        <SignUp />
      </div>
    </>
  );
}
