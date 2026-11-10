import { useLang } from '../i18n.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Diya, KolamBorder } from '../components/Motifs.jsx';

export function Closing() {
  const { t, isTe } = useLang();
  return (
    <footer className="relative py-20 sm:py-24 text-ivory text-center w-full max-w-full overflow-hidden">
      <div className="container-luxe relative z-10 overflow-visible">
        {/* Three Auspicious Diyas */}
        <Reveal type="bloom" className="flex justify-center gap-4 sm:gap-5">
          <Diya className="h-6 w-6 sm:h-7 sm:w-7 opacity-75" flickerClass="animate-flicker2" />
          <Diya className="h-9 w-9 sm:h-10 sm:w-10 opacity-95" flickerClass="animate-flicker" />
          <Diya className="h-6 w-6 sm:h-7 sm:w-7 opacity-75" flickerClass="animate-flicker3" />
        </Reveal>

        {/* Closing Line */}
        <Reveal delay={0.1}>
          <p
            className={`mx-auto mt-6 max-w-lg text-sm sm:text-lg text-ivory/80 px-4 ${
              isTe ? 'lang-te leading-relaxed' : 'font-serif italic leading-normal'
            }`}
          >
            {t.closing.line}
          </p>
        </Reveal>

        {/* Couple Names — Large Gilt Calligraphy */}
        <Reveal delay={0.2}>
          <div className="my-3 overflow-visible py-1">
            <h2
              className={`text-gilt text-3xl sm:text-5xl overflow-visible ${
                isTe ? 'lang-te serif py-2.5 leading-relaxed' : 'font-serif italic py-1.5 leading-normal'
              }`}
            >
              {t.closing.names}
            </h2>
          </div>
        </Reveal>

        {/* Kolam Divider */}
        <Reveal delay={0.28}>
          <div className="mt-4 flex justify-center px-4">
            <KolamBorder className="h-4 w-44 sm:w-56 max-w-full" stroke="var(--theme-accent)" />
          </div>
        </Reveal>

        {/* Compliments */}
        <Reveal delay={0.36}>
          <p className={`mt-4 sm:mt-5 text-xs sm:text-sm text-ivory/65 px-4 ${isTe ? 'lang-te' : 'tracking-wide'}`}>
            {t.closing.compliments}
          </p>
        </Reveal>

        <div className="my-7 flex justify-center">
          <span className="h-px w-32 opacity-30" style={{ background: 'var(--theme-accent)' }} />
        </div>

        {/* Footer info */}
        <Reveal delay={0.1}>
          <p className={`text-[11px] sm:text-xs text-ivory/50 px-4 ${isTe ? 'lang-te' : 'tracking-wide'}`}>
            {t.footer.madeWith}
          </p>
          <p className={`mt-1 text-[10px] sm:text-[11px] text-ivory/35 ${isTe ? 'lang-te' : 'tracking-[0.2em]'}`}>
            {t.footer.family}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
