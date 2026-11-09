import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n.jsx';
import { Mandala, TempleSilhouette, FloralSprig, Diya } from '../components/Motifs.jsx';

export function Hero() {
  const { t, isTe } = useLang();
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  const scrollDown = () => {
    const el = document.getElementById('couple');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-maroon-deep text-ivory">
      {/* Ambient mandalas */}
      <Mandala className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 text-gold/15 sm:h-96 sm:w-96" spin={!reduce} />
      <Mandala className="pointer-events-none absolute -left-28 bottom-24 h-64 w-64 text-gold/10" />

      {/* Temple skyline */}
      <TempleSilhouette className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-maroondark/70 sm:h-36" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 50% at 50% 42%, transparent, rgba(58,9,18,0.55))' }} />

      <div className="container-luxe relative z-10 flex flex-col items-center py-24 text-center">
        <motion.div {...rise(0.1)}>
          <div className="mb-6 flex items-center justify-center gap-3">
            <Diya className="h-8 w-8" />
            <p className={`eyebrow text-goldlight ${isTe ? 'lang-te tracking-normal text-sm' : ''}`}>{t.hero.family}</p>
            <Diya className="h-8 w-8" />
          </div>
        </motion.div>

        <motion.p {...rise(0.25)} className={`text-sm text-ivory/70 ${isTe ? 'lang-te' : 'tracking-wide'}`}>
          {t.hero.invite}
        </motion.p>

        {/* Names — single semantic heading */}
        <h1 className="mt-4 flex flex-col items-center">
          <motion.span
            {...rise(0.4)}
            className={`text-gilt block text-5xl leading-tight sm:text-7xl md:text-8xl ${isTe ? 'lang-te serif' : 'font-serif italic'}`}
          >
            {t.hero.bride}
          </motion.span>
          <motion.span {...rise(0.55)} className="my-2 flex items-center gap-4 sm:my-3" aria-hidden="true">
            <span className="h-px w-10 bg-gold/50 sm:w-16" />
            <span className="font-serif text-2xl text-goldlight sm:text-3xl">{t.hero.and}</span>
            <span className="h-px w-10 bg-gold/50 sm:w-16" />
          </motion.span>
          <motion.span
            {...rise(0.7)}
            className={`text-gilt block text-5xl leading-tight sm:text-7xl md:text-8xl ${isTe ? 'lang-te serif' : 'font-serif italic'}`}
          >
            {t.hero.groom}
          </motion.span>
        </h1>

        <motion.div {...rise(0.9)} className="mt-8">
          <FloralSprig className="mx-auto h-6 w-28 text-gold" />
        </motion.div>

        <motion.p {...rise(1.0)} className={`mt-6 max-w-md text-ivory/80 ${isTe ? 'lang-te' : ''}`}>
          {t.hero.line}
        </motion.p>

        <motion.div {...rise(1.15)} className="mt-8 flex flex-col items-center gap-1">
          <p className={`font-serif text-lg text-goldlight sm:text-xl ${isTe ? 'lang-te serif' : ''}`}>{t.hero.date}</p>
          <p className={`text-sm text-ivory/70 ${isTe ? 'lang-te' : ''}`}>{t.hero.place}</p>
        </motion.div>

        <motion.button
          {...rise(1.3)}
          onClick={scrollDown}
          className="btn-gold mt-9"
        >
          {t.hero.cta}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      {!reduce && (
        <motion.button
          onClick={scrollDown}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          aria-label={t.hero.scroll}
        >
          <span className={`text-[10px] uppercase tracking-[0.3em] ${isTe ? 'lang-te tracking-normal' : ''}`}>{t.hero.scroll}</span>
          <motion.span
            className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      )}
    </section>
  );
}
