import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n.jsx';
import { GaneshaCrest, TempleSilhouette, Diya } from '../components/Motifs.jsx';
import { SplitText } from '../components/Reveal.jsx';

export function Hero() {
  const { t, isTe } = useLang();
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  const scrollDown = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full max-w-full flex-col items-center justify-center overflow-hidden text-ivory"
    >
      {/* ── Main Hero Content ── */}
      <div className="container-luxe relative z-10 flex flex-col items-center py-20 sm:py-28 text-center overflow-visible">
        {/* Sacred Ganesha Crest (Matches public/wedding-card.jfif) */}
        <motion.div {...rise(0.08)} className="mb-3.5 sm:mb-4">
          <GaneshaCrest className="h-20 w-20 sm:h-28 sm:w-28" />
        </motion.div>

        {/* Auspicious Invocation / Family Banner */}
        <motion.div {...rise(0.18)}>
          <div className="mb-2.5 sm:mb-3 flex items-center justify-center gap-2.5 sm:gap-3">
            <Diya className="h-5 w-5 sm:h-6 sm:w-6" flickerClass="animate-flicker" />
            <p className={`eyebrow text-[11px] sm:text-xs ${isTe ? 'lang-te tracking-normal text-xs sm:text-sm' : ''}`}>
              {t.hero.family}
            </p>
            <Diya className="h-5 w-5 sm:h-6 sm:w-6" flickerClass="animate-flicker2" />
          </div>
        </motion.div>

        {/* Invite Line */}
        <motion.p
          {...rise(0.28)}
          className={`text-xs sm:text-sm text-ivory/75 ${isTe ? 'lang-te' : 'tracking-wide'}`}
        >
          {t.hero.invite}
        </motion.p>

        {/* Couple Names — Radiant Gold Calligraphy */}
        <h1 className="mt-3.5 sm:mt-4 flex flex-col items-center overflow-visible py-1">
          <SplitText
            className={`text-gilt text-3xl sm:text-6xl md:text-7xl overflow-visible ${
              isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'font-serif italic py-1 leading-normal'
            }`}
            delay={0.4}
            stagger={0.06}
          >
            {t.hero.bride}
          </SplitText>

          {/* & Divider */}
          <motion.div
            {...rise(0.7)}
            className="my-1.5 flex items-center gap-3 sm:my-3 sm:gap-4"
            aria-hidden="true"
          >
            <span
              className="h-px w-8 sm:w-16"
              style={{ background: 'var(--theme-accent)', opacity: 0.5 }}
            />
            <span
              className="font-serif text-xl sm:text-3xl text-ivory/90"
              style={{ color: 'var(--theme-accent-lt)' }}
            >
              {t.hero.and}
            </span>
            <span
              className="h-px w-8 sm:w-16"
              style={{ background: 'var(--theme-accent)', opacity: 0.5 }}
            />
          </motion.div>

          <SplitText
            className={`text-gilt text-3xl sm:text-6xl md:text-7xl overflow-visible ${
              isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'font-serif italic py-1 leading-normal'
            }`}
            delay={0.8}
            stagger={0.06}
          >
            {t.hero.groom}
          </SplitText>
        </h1>

        {/* Request Line */}
        <motion.p
          {...rise(1.15)}
          className={`mt-4 sm:mt-6 max-w-md text-xs sm:text-base text-ivory/80 ${isTe ? 'lang-te' : ''}`}
        >
          {t.hero.line}
        </motion.p>

        {/* Sacred Muhurtham Date & Temple Venue */}
        <motion.div {...rise(1.3)} className="mt-4 sm:mt-5 flex flex-col items-center gap-1 overflow-visible">
          <p
            className={`font-serif text-base sm:text-xl py-0.5 ${isTe ? 'lang-te serif' : 'italic'}`}
            style={{ color: 'var(--theme-accent-lt)' }}
          >
            {t.hero.date}
          </p>
          <p className={`text-xs sm:text-sm text-ivory/70 px-4 ${isTe ? 'lang-te' : ''}`}>
            {t.hero.place}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          {...rise(1.45)}
          onClick={scrollDown}
          className="btn-gold mt-6 sm:mt-8"
        >
          {t.hero.cta}
        </motion.button>
      </div>

      {/* ── Temple Silhouette at Bottom ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full overflow-hidden">
        <TempleSilhouette
          className="h-16 w-full sm:h-28"
          style={{ color: 'var(--theme-silhouette)' }}
        />
      </div>

      {/* ── Scroll Down Indicator ── */}
      {!reduce && (
        <motion.button
          onClick={scrollDown}
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-ivory/60 transition-opacity hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          aria-label={t.hero.scroll}
        >
          <span className={`text-[9px] sm:text-[10px] uppercase ${isTe ? 'lang-te tracking-normal' : 'tracking-[0.25em]'}`}>
            {t.hero.scroll}
          </span>
          <motion.span
            className="block h-6 sm:h-7 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--theme-accent), transparent)' }}
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      )}
    </section>
  );
}
