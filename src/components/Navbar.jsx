import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n.jsx';

const LINKS = ['couple', 'invitation', 'events', 'countdown', 'family', 'venue', 'contact'];

export function Navbar() {
  const { t, isTe, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-sm shadow-[0_4px_20px_-12px_rgba(110,20,35,0.5)]' : 'bg-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <nav className="container-luxe flex h-full items-center justify-between">
        <a
          href="#home"
          onClick={go('home')}
          className={`font-serif text-lg sm:text-xl ${scrolled ? 'text-maroon' : 'text-ivory'} transition-colors`}
        >
          <span className="italic">B</span>
          <span className="text-gold"> ❖ </span>
          <span className="italic">R</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={go(key)}
                className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  scrolled ? 'text-ink/80' : 'text-ivory/90'
                } ${isTe ? 'lang-te tracking-normal text-sm' : ''}`}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:bg-gold hover:text-maroondark ${
              scrolled ? 'border-gold/50 text-maroon' : 'border-ivory/40 text-ivory'
            } ${isTe ? '' : 'lang-te'}`}
            aria-label="Switch language"
          >
            {t.langLabel}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden rounded-full p-2 ${scrolled ? 'text-maroon' : 'text-ivory'}`}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[var(--nav-h)] z-40 bg-maroon-deep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-1 px-6 py-8">
              {LINKS.map((key, i) => (
                <motion.li
                  key={key}
                  className="w-full text-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={`#${key}`}
                    onClick={go(key)}
                    className={`block border-b border-gold/15 py-4 font-serif text-2xl text-ivory ${
                      isTe ? 'lang-te serif' : 'italic'
                    }`}
                  >
                    {t.nav[key]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
