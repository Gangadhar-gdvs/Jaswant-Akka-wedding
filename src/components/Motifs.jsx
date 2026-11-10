// Authentic South Indian Wedding Motifs — pure vector SVG.
// Inspired by traditional temple art & the wedding card filigree.

/* ─── Sacred Ganesha Crest ──────────────────────────────────────────────────
   Ornamental medallion with filigree frame & golden Ganesha,
   matching the physical wedding card in public/wedding-card.jfif            */
export function GaneshaCrest({ className = '', style }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={style}>
      <svg
        viewBox="0 0 160 160"
        className="h-full w-full drop-shadow-[0_4px_16px_rgba(199,154,59,0.35)]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="goldAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#C79A3B" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#C79A3B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
          <linearGradient id="silverFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer aura glow */}
        <circle cx="80" cy="80" r="76" fill="url(#goldAura)" />

        {/* Outer Filigree Ring (16 petals/flourishes) */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI) / 8;
          const cx = 80 + Math.cos(a) * 66;
          const cy = 80 + Math.sin(a) * 66;
          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r="3"
                fill="url(#silverFiligree)"
                opacity="0.85"
              />
              <path
                d={`M ${80 + Math.cos(a) * 58} ${80 + Math.sin(a) * 58} Q ${cx} ${cy} ${
                  80 + Math.cos(a + Math.PI / 16) * 64
                } ${80 + Math.sin(a + Math.PI / 16) * 64}`}
                stroke="url(#silverFiligree)"
                strokeWidth="1"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* Decorative Scalloped Cartouche */}
        <circle cx="80" cy="80" r="54" stroke="url(#crestGold)" strokeWidth="1.6" opacity="0.8" />
        <circle cx="80" cy="80" r="49" stroke="url(#silverFiligree)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="80" cy="80" r="44" stroke="url(#crestGold)" strokeWidth="1.2" opacity="0.7" />

        {/* Sacred Ganesha Figure in Center */}
        <g transform="translate(46, 42) scale(0.68)">
          {/* Crown / Mukut */}
          <path
            d="M 50 15 L 43 28 L 57 28 Z"
            fill="url(#crestGold)"
          />
          <circle cx="50" cy="12" r="3" fill="#FFEAA7" />
          <path
            d="M 37 32 Q 50 24 63 32 L 61 36 Q 50 30 39 36 Z"
            fill="url(#crestGold)"
          />

          {/* Large Auspicious Ears */}
          <path
            d="M 37 36 C 18 32 16 52 28 62 C 34 66 38 60 38 54"
            fill="none"
            stroke="url(#crestGold)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 63 36 C 82 32 84 52 72 62 C 66 66 62 60 62 54"
            fill="none"
            stroke="url(#crestGold)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Forehead & Tilak */}
          <path
            d="M 43 42 Q 50 40 57 42"
            stroke="url(#crestGold)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="50" cy="46" r="2.2" fill="#D43A26" />

          {/* Eyes */}
          <circle cx="43" cy="49" r="1.8" fill="#FFF" />
          <circle cx="57" cy="49" r="1.8" fill="#FFF" />

          {/* Graceful Trunk curved towards left */}
          <path
            d="M 50 48 Q 50 68 40 76 Q 34 82 39 88 Q 45 92 52 87"
            fill="none"
            stroke="url(#crestGold)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Modak (sweet) in trunk / hand */}
          <circle cx="53" cy="85" r="3.2" fill="#FFEAA7" />

          {/* Tusk (Ekadanta) */}
          <line x1="56" y1="62" x2="62" y2="60" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" />

          {/* Bell / Modak blessing glow */}
          <circle cx="50" cy="50" r="1" fill="#FFEAA7" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Lotus Medallion ──────────────────────────────────────────────────────
   16-petal lotus — South Indian temple ceiling medallion                   */
export function LotusMedallion({ className = '', stroke = 'currentColor', spin = false }) {
  const bigPetals = Array.from({ length: 8 }, (_, i) => i * 45);
  const smallPetals = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  const dots = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${spin ? 'animate-spinslow' : ''}`}
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="94" opacity="0.18" />
      <circle cx="100" cy="100" r="78" opacity="0.25" />

      {bigPetals.map((deg) => {
        const r = (deg * Math.PI) / 180;
        const mx = 100 + 28 * Math.cos(r);
        const my = 100 + 28 * Math.sin(r);
        const tx = 100 + 72 * Math.cos(r);
        const ty = 100 + 72 * Math.sin(r);
        const pr = r + Math.PI / 2;
        const w = 13;
        return (
          <path
            key={deg}
            d={`M ${mx} ${my}
                C ${mx + w * Math.cos(pr)} ${my + w * Math.sin(pr)} ${tx + w * Math.cos(pr)} ${ty + w * Math.sin(pr)} ${tx} ${ty}
                C ${tx - w * Math.cos(pr)} ${ty - w * Math.sin(pr)} ${mx - w * Math.cos(pr)} ${my - w * Math.sin(pr)} ${mx} ${my} Z`}
            opacity="0.70"
          />
        );
      })}

      {smallPetals.map((deg) => {
        const r = (deg * Math.PI) / 180;
        const mx = 100 + 24 * Math.cos(r);
        const my = 100 + 24 * Math.sin(r);
        const tx = 100 + 50 * Math.cos(r);
        const ty = 100 + 50 * Math.sin(r);
        const pr = r + Math.PI / 2;
        const w = 7;
        return (
          <path
            key={deg}
            d={`M ${mx} ${my}
                C ${mx + w * Math.cos(pr)} ${my + w * Math.sin(pr)} ${tx + w * Math.cos(pr)} ${ty + w * Math.sin(pr)} ${tx} ${ty}
                C ${tx - w * Math.cos(pr)} ${ty - w * Math.sin(pr)} ${mx - w * Math.cos(pr)} ${my - w * Math.sin(pr)} ${mx} ${my} Z`}
            opacity="0.45"
          />
        );
      })}

      <circle cx="100" cy="100" r="22" opacity="0.65" />
      <circle cx="100" cy="100" r="10" fill={stroke} stroke="none" opacity="0.5" />

      {dots.map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={100 + 78 * Math.cos(r)}
            cy={100 + 78 * Math.sin(r)}
            r="3"
            fill={stroke}
            stroke="none"
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}

/* ─── Kolam Border ─────────────────────────────────────────────────────────
   Geometric South Indian dot-and-line divider                              */
export function KolamBorder({ className = '', stroke = 'currentColor' }) {
  const diamonds = Array.from({ length: 9 }, (_, i) => i * 36 + 18);
  return (
    <svg
      viewBox="0 0 324 36"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="0" y1="18" x2="324" y2="18" opacity="0.35" />
      {diamonds.map((cx) => (
        <g key={cx} opacity="0.8">
          <path d={`M ${cx} 6 L ${cx + 14} 18 L ${cx} 30 L ${cx - 14} 18 Z`} />
          <circle cx={cx} cy={6} r="2.2" fill={stroke} stroke="none" opacity="0.75" />
          <circle cx={cx} cy={30} r="2.2" fill={stroke} stroke="none" opacity="0.75" />
        </g>
      ))}
      <circle cx="4" cy="18" r="2.5" fill={stroke} stroke="none" opacity="0.6" />
      <circle cx="320" cy="18" r="2.5" fill={stroke} stroke="none" opacity="0.6" />
    </svg>
  );
}

/* ─── Mango / Paisley Corner ───────────────────────────────────────────────
   Traditional Kanchipuram sari mango (kalka) motif corner                  */
export function MangoCorner({ className = '', stroke = 'currentColor', style }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      fill="none"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 60 Q4 4 60 4" opacity="0.70" />
      <path d="M4 46 Q4 14 46 4" opacity="0.50" />
      <path d="M60 4 C 70 -4, 76 10, 64 16 C 56 20, 52 12, 60 4 Z" opacity="0.65" />
      <path d="M46 4 C 54 -2, 58 10, 48 14 C 42 17, 40 8, 46 4 Z" opacity="0.45" />
      <circle cx="4" cy="60" r="2.8" fill={stroke} stroke="none" opacity="0.60" />
      <circle cx="4" cy="46" r="1.8" fill={stroke} stroke="none" opacity="0.40" />
    </svg>
  );
}

/* ─── Traditional Diya ─────────────────────────────────────────────────────
   Deepam lamp with realistic flame glow                                     */
export function Diya({ className = '', color = '#C79A3B', flickerClass = 'animate-flicker' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="diya-flame-warm" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF7CC" />
          <stop offset="45%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#D43A26" />
        </radialGradient>
        <radialGradient id="diya-glow-warm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="30" rx="16" ry="14" fill="url(#diya-glow-warm)" />
      <path d="M20 46 q12 10 24 0 q-2 8 -12 8 q-10 0 -12 -8 Z" fill={color} />
      <ellipse cx="32" cy="46" rx="16" ry="4" fill={color} opacity="0.6" />
      <path
        d="M32 20 C 36 28, 41 32, 32 42 C 23 32, 28 28, 32 20 Z"
        fill="url(#diya-flame-warm)"
        className={flickerClass}
      />
      <line x1="32" y1="38" x2="32" y2="43" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* ─── Sacred Kalasha ────────────────────────────────────────────────────────
   Auspicious pot with coconut & mango leaves                                */
export function Kalasha({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" stroke={stroke} strokeWidth="1.6" aria-hidden="true">
      <path d="M40 8 C 34 16, 46 16, 40 24" strokeLinecap="round" />
      <path d="M22 30 q18 -10 36 0 l-4 10 h-28 Z" />
      <path d="M18 40 q22 40 44 0" />
      <path d="M26 92 q14 8 28 0 l-4 10 h-20 Z" />
      <path d="M30 30 q-10 -6 -4 -14 M50 30 q10 -6 4 -14" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="40" cy="7" rx="6" ry="5" strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}

/* ─── Sacred Om ─────────────────────────────────────────────────────────────*/
export function OmSymbol({ className = '', fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={fill} aria-hidden="true">
      <text x="50" y="68" textAnchor="middle" fontSize="64" fontFamily="'Noto Serif Telugu', serif">
        ॐ
      </text>
    </svg>
  );
}

/* ─── Temple Gopuram Silhouette ────────────────────────────────────────────*/
export function TempleSilhouette({ className = '', fill = 'currentColor', style }) {
  return (
    <svg
      viewBox="0 0 1200 220"
      className={className}
      fill={fill}
      style={style}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M0 220 V150 h40 l10 -20 h30 l10 -30 l20 -40 l20 40 l10 30 h30 l10 20 h30 V120 l25 -25 l25 25 v30 h40 l12 -22 h28 l12 -34 l22 -46 l22 46 l12 34 h28 l12 22 h36 V110 l28 -28 l28 28 v40 h44 l14 -24 h30 l14 -38 l24 -52 l24 52 l14 38 h30 l14 24 h40 V120 l26 -26 l26 26 v30 h40 l12 -22 h28 l12 -34 l22 -46 l22 46 l12 34 h28 l12 22 h30 V150 h40 V220 Z" />
    </svg>
  );
}

/* ─── Decorative Floral Sprig ──────────────────────────────────────────────*/
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
    </svg>
  );
}

export function CornerFlourish({ className = '', stroke = 'currentColor' }) {
  return <MangoCorner className={className} stroke={stroke} />;
}

export function Mandala({ className = '', stroke = 'currentColor', spin = false }) {
  return <LotusMedallion className={className} stroke={stroke} spin={spin} />;
}

export function RangoliCircle({ className = '', stroke = 'currentColor', spin = false }) {
  return <LotusMedallion className={className} stroke={stroke} spin={spin} />;
}
