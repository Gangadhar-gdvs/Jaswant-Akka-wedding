import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLang } from '../i18n.jsx';
import { useTheme } from '../theme.jsx';

export function Navbar() {
  const { t, isTe, toggle } = useLang();
  const { isTraditional, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Scroll progress indicator line at top ── */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--theme-scroll-bar)',
          zIndex: 60,
          pointerEvents: 'none',
        }}
      />

      {/* ── Minimal Floating Header (Fully Responsive on all screens) ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md shadow-[0_4px_24px_-10px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
        style={{
          height: 'var(--nav-h)',
          backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--theme-card-border)' : '1px solid transparent',
        }}
      >
        <div className="container-luxe flex h-full items-center justify-between">
          {/* Couple Monogram */}
          <a
            href="#home"
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 font-serif text-base sm:text-xl tracking-wider text-ivory transition-transform hover:scale-105"
            aria-label="Back to top"
          >
            <span className="italic">B</span>
            <span style={{ color: 'var(--theme-accent)' }}>❖</span>
            <span className="italic">R</span>
          </a>

          {/* Essential Controls Only: Language & Theme */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switch */}
            <button
              onClick={toggle}
              className="rounded-full border px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-medium text-ivory shadow-sm transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--theme-card-border)',
                background: 'var(--btn-pill-bg)',
              }}
              aria-label="Switch language"
            >
              <span className={isTe ? '' : 'lang-te'}>{t.langLabel}</span>
            </button>

            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 rounded-full border px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-medium text-ivory shadow-sm transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--theme-card-border)',
                background: 'var(--btn-pill-bg)',
              }}
              aria-label={
                isTraditional
                  ? 'Switch to Wedding Card Theme'
                  : 'Switch to Traditional Theme'
              }
              title={
                isTraditional
                  ? 'Switch to Wedding Card Theme'
                  : 'Switch to Traditional Theme'
              }
            >
              {isTraditional ? (
                <>
                  <span className="text-xs sm:text-sm">🪔</span>
                  <span className="hidden sm:inline">Traditional</span>
                </>
              ) : (
                <>
                  <span className="text-xs sm:text-sm">🦚</span>
                  <span className="hidden sm:inline">Card Blue</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
