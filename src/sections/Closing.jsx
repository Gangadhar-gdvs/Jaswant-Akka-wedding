import { useLang } from '../i18n.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Mandala, FloralSprig, Diya } from '../components/Motifs.jsx';

export function Closing() {
  const { t, isTe } = useLang();
  return (
    <footer className="relative overflow-hidden bg-maroon-deep text-ivory">
      <Mandala className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 text-gold/10" />
      <Mandala className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 text-gold/10" spin />

      <div className="container-luxe relative z-10 py-20 text-center sm:py-24">
        <Reveal className="flex justify-center gap-4">
          <Diya className="h-8 w-8" />
          <Diya className="h-10 w-10" />
          <Diya className="h-8 w-8" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className={`mx-auto mt-8 max-w-lg text-lg text-ivory/80 ${isTe ? 'lang-te' : 'font-serif italic'}`}>
            {t.closing.line}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className={`text-gilt mt-5 text-4xl sm:text-5xl ${isTe ? 'lang-te serif' : 'font-serif italic'}`}>
            {t.closing.names}
          </h2>
        </Reveal>

        <Reveal delay={0.28}>
          <FloralSprig className="mx-auto mt-6 h-5 w-24 text-goldlight" />
        </Reveal>

        <Reveal delay={0.36}>
          <p className={`mt-6 text-sm text-ivory/60 ${isTe ? 'lang-te' : 'tracking-wide'}`}>{t.closing.compliments}</p>
        </Reveal>

        <div className="divider-gold mx-auto mt-12 w-40 opacity-40" />

        <Reveal delay={0.1}>
          <p className={`mt-6 text-xs text-ivory/50 ${isTe ? 'lang-te' : 'tracking-wide'}`}>{t.footer.madeWith}</p>
          <p className={`mt-1 text-xs text-ivory/40 ${isTe ? 'lang-te' : 'tracking-[0.2em]'}`}>{t.footer.family}</p>
        </Reveal>
      </div>
    </footer>
  );
}
