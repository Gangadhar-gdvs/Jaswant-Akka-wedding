import { useLang } from '../i18n.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem, Reveal } from '../components/Reveal.jsx';
import { OmSymbol, MangoCorner } from '../components/Motifs.jsx';

export function Family() {
  const { t, isTe } = useLang();
  return (
    <section id="family" className="py-20 sm:py-28 overflow-x-clip w-full max-w-full">
      <div className="container-luxe max-w-3xl overflow-visible">
        <SectionHeading eyebrow={t.family.eyebrow} title={t.family.title} />

        <Reveal delay={0.1} className="mt-9 text-center">
          <Reveal type="bloom">
            <OmSymbol className="mx-auto h-11 w-11" fill="var(--theme-accent)" />
          </Reveal>
          <p
            className={`mt-3.5 eyebrow ${isTe ? 'lang-te tracking-normal' : ''}`}
          >
            {t.family.blessed}
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2 overflow-visible">
          {t.family.elders.map((name) => (
            <RevealItem key={name}>
              <div className="card-paper relative flex items-center gap-3 px-5 py-4">
                <MangoCorner
                  className="absolute left-2 top-2 h-4 w-4"
                  stroke="var(--theme-accent)"
                  style={{ opacity: 0.5 }}
                />
                <span className="text-sm" style={{ color: 'var(--theme-accent)' }}>
                  ✿
                </span>
                <span
                  className={`text-sm sm:text-base font-medium text-ivory/90 ${
                    isTe ? 'lang-te' : ''
                  }`}
                >
                  {name}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
