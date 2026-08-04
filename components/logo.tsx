/**
 * LogoMark — the "Ai" monogram (hollow A + dotted i) from the client app
 * (iClinic-Frontend public/logo/logo.svg), in the brand blue gradient.
 * Self-contained; the gradient id is fixed and identical across instances.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="3 5 38 38" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iclinicLogoGrad" x1="6" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5BB6F7" />
          <stop offset="1" stopColor="#1E7FE6" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6 39 L18 7.6 L30.4 39 L24.6 39 L22.2 32.6 L13.8 32.6 L11.4 39 Z M18 19.6 L15.1 27.6 L20.9 27.6 Z"
        fill="url(#iclinicLogoGrad)"
      />
      <rect x="32.4" y="18.4" width="5.4" height="20.6" rx="2.7" fill="url(#iclinicLogoGrad)" />
      <circle cx="35.1" cy="11.5" r="3.2" fill="url(#iclinicLogoGrad)" />
    </svg>
  )
}
