import { useLang } from '../i18n.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem, Reveal } from '../components/Reveal.jsx';
import { OmSymbol } from '../components/Motifs.jsx';

export function Family() {
  const { t, isTe } = useLang();
  return (
    <section id="family" className="bg-paper py-20 sm:py-28">
      <div className="container-luxe max-w-3xl">
        <SectionHeading eyebrow={t.family.eyebrow} title={t.family.title} />

        <Reveal delay={0.1} className="mt-10 text-center">
          <OmSymbol className="mx-auto h-10 w-10 text-gold" />
          <p className={`mt-4 text-sm uppercase tracking-[0.2em] text-gold ${isTe ? 'lang-te tracking-normal' : ''}`}>
            {t.family.blessed}
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
          {t.family.elders.map((name) => (
            <RevealItem key={name}>
              <div className="card-paper flex items-center gap-3 px-5 py-4">
                <span className="text-gold">❖</span>
                <span className={`text-base text-ink/85 ${isTe ? 'lang-te' : ''}`}>{name}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
