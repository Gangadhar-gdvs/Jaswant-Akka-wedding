import { useLang } from '../i18n.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Kalasha, Mandala, FloralSprig } from '../components/Motifs.jsx';

export function Invitation() {
  const { t, isTe } = useLang();
  return (
    <section id="invitation" className="relative overflow-hidden bg-maroon-deep py-20 text-ivory sm:py-28">
      <Mandala className="pointer-events-none absolute -left-20 top-10 h-60 w-60 text-gold/10" />
      <Mandala className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 text-gold/10" />

      <div className="container-luxe relative z-10 max-w-3xl text-center">
        <Reveal className="flex justify-center">
          <Kalasha className="h-16 w-12 text-goldlight" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className={`eyebrow mt-5 text-goldlight ${isTe ? 'lang-te tracking-normal' : ''}`}>{t.invitation.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className={`mt-3 font-serif text-3xl text-ivory sm:text-4xl md:text-5xl ${isTe ? 'lang-te serif' : 'italic'}`}>
            {t.invitation.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <FloralSprig className="mx-auto mt-6 h-5 w-24 text-goldlight" />
        </Reveal>

        <Reveal delay={0.28}>
          <p className={`mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85 ${isTe ? 'lang-te' : 'font-serif'}`}>
            {t.invitation.body}
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <p className={`mx-auto mt-6 max-w-xl text-base italic leading-relaxed text-goldlight ${isTe ? 'lang-te not-italic' : 'font-serif'}`}>
            {t.invitation.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
