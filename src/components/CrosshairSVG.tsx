const CrosshairSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={`w-10 h-10 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" />
    <line x1="20" y1="0" x2="20" y2="12" stroke="currentColor" strokeWidth="0.5" />
    <line x1="20" y1="28" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" />
    <line x1="0" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="0.5" />
    <line x1="28" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export default CrosshairSVG;
