// Decorative SVG motifs — all vector, no raster images.
// Temple, mandala, kolam, floral sprig, diya, om, kalasha.

export function Mandala({ className = '', stroke = 'currentColor', spin = false }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${spin ? 'animate-spinslow' : ''}`}
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="96" opacity="0.5" />
      <circle cx="100" cy="100" r="74" opacity="0.7" />
      <circle cx="100" cy="100" r="40" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8;
        const x1 = 100 + Math.cos(a) * 40;
        const y1 = 100 + Math.sin(a) * 40;
        const x2 = 100 + Math.cos(a) * 74;
        const y2 = 100 + Math.sin(a) * 74;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.6" />;
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8;
        const cx = 100 + Math.cos(a) * 85;
        const cy = 100 + Math.sin(a) * 85;
        return <circle key={i} cx={cx} cy={cy} r="4" opacity="0.7" />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const cx = 100 + Math.cos(a) * 57;
        const cy = 100 + Math.sin(a) * 57;
        return <circle key={`p${i}`} cx={cx} cy={cy} r="9" opacity="0.5" />;
      })}
    </svg>
  );
}

export function TempleSilhouette({ className = '', fill = 'currentColor' }) {
  // Stylised South-Indian gopuram skyline
  return (
    <svg viewBox="0 0 1200 220" className={className} fill={fill} aria-hidden="true" preserveAspectRatio="none">
      <path d="M0 220 V150 h40 l10 -20 h30 l10 -30 l20 -40 l20 40 l10 30 h30 l10 20 h30 V120 l25 -25 l25 25 v30 h40 l12 -22 h28 l12 -34 l22 -46 l22 46 l12 34 h28 l12 22 h36 V110 l28 -28 l28 28 v40 h44 l14 -24 h30 l14 -38 l24 -52 l24 52 l14 38 h30 l14 24 h40 V120 l26 -26 l26 26 v30 h40 l12 -22 h28 l12 -34 l22 -46 l22 46 l12 34 h28 l12 22 h30 V150 h40 V220 Z" />
    </svg>
  );
}

export function FloralSprig({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke={stroke} strokeWidth="1.4" aria-hidden="true">
      <path d="M60 20 C 40 20, 30 8, 10 12 M60 20 C 80 20, 90 8, 110 12" strokeLinecap="round" />
      <path d="M60 20 C 44 24, 36 32, 22 34 M60 20 C 76 24, 84 32, 98 34" strokeLinecap="round" opacity="0.7" />
      {[18, 30, 42].map((x) => (
        <circle key={`l${x}`} cx={x} cy={14 + (x % 7)} r="2.5" fill={stroke} stroke="none" opacity="0.8" />
      ))}
      {[78, 90, 102].map((x) => (
        <circle key={`r${x}`} cx={x} cy={14 + (x % 7)} r="2.5" fill={stroke} stroke="none" opacity="0.8" />
      ))}
      <g transform="translate(60 20)">
        <circle r="4" fill={stroke} stroke="none" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return <ellipse key={i} cx={Math.cos(a) * 7} cy={Math.sin(a) * 7} rx="3.4" ry="1.6" transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * 7} ${Math.sin(a) * 7})`} fill={stroke} stroke="none" opacity="0.55" />;
        })}
      </g>
    </svg>
  );
}

export function Diya({ className = '', color = '#C79A3B' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="flame" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="60%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#D0021B" />
        </radialGradient>
      </defs>
      <path d="M20 46 q12 10 24 0 q-2 8 -12 8 q-10 0 -12 -8 Z" fill={color} />
      <ellipse cx="32" cy="46" rx="16" ry="4" fill={color} opacity="0.6" />
      <path d="M32 18 C 36 26, 40 30, 32 40 C 24 30, 28 26, 32 18 Z" fill="url(#flame)" className="animate-shimmer" />
    </svg>
  );
}

export function Kalasha({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke={stroke} strokeWidth="1.6" aria-hidden="true">
      <path d="M40 8 C 34 16, 46 16, 40 24" strokeLinecap="round" />
      <path d="M22 30 q18 -10 36 0 l-4 10 h-28 Z" />
      <path d="M18 40 q22 40 44 0" />
      <path d="M26 92 q14 8 28 0 l-4 10 h-20 Z" />
      <path d="M30 30 q-10 -6 -4 -14 M50 30 q10 -6 4 -14" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function OmSymbol({ className = '', fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={fill} aria-hidden="true">
      <text x="50" y="68" textAnchor="middle" fontSize="64" fontFamily="'Noto Serif Telugu', serif">
        ॐ
      </text>
    </svg>
  );
}

// Corner flourish for framing cards
export function CornerFlourish({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke={stroke} strokeWidth="1.2" aria-hidden="true">
      <path d="M2 30 Q 2 2 30 2" strokeLinecap="round" />
      <path d="M10 30 Q 10 10 30 10" strokeLinecap="round" opacity="0.6" />
      <circle cx="30" cy="2" r="2.5" fill={stroke} stroke="none" />
      <circle cx="2" cy="30" r="2.5" fill={stroke} stroke="none" />
    </svg>
  );
}
