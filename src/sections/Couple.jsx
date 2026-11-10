import { useLang } from '../i18n.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { LotusMedallion, MangoCorner, KolamBorder } from '../components/Motifs.jsx';

function PersonCard({ person, isTe }) {
  return (
    <Reveal className="relative h-full overflow-visible">
      <div className="card-paper relative h-full px-5 py-7 sm:px-6 sm:py-9 text-center overflow-visible">
        {/* Mango Corner Flourishes */}
        <MangoCorner className="absolute left-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
        <MangoCorner className="absolute right-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-x-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
        <MangoCorner className="absolute bottom-2.5 left-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-y-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
        <MangoCorner className="absolute bottom-2.5 right-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />

        {/* ── Desktop View: Elegant Initial Monogram Seal inside Lotus Medallion ── */}
        <div className="hidden sm:flex relative mx-auto mb-4 h-24 w-24 items-center justify-center">
          <LotusMedallion className="absolute inset-0" stroke="var(--theme-accent)" />
          <span
            className={`relative z-10 font-serif text-3xl text-ivory ${
              isTe ? 'lang-te serif' : 'italic'
            }`}
          >
            {person.name.replace(/^K\.\s*|^కే\.\s*/, '').charAt(0)}
          </span>
        </div>

        {/* ── Mobile View: Compact Auspicious Traditional Role Pill ── */}
        <div className="sm:hidden mb-3 flex items-center justify-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{
              background: 'var(--btn-pill-bg)',
              border: '1px solid var(--theme-card-border)',
              color: 'var(--theme-accent-lt)',
            }}
          >
            <span className="text-sm">✿</span>
            <span className={isTe ? 'lang-te tracking-normal text-xs' : ''}>{person.role}</span>
            <span className="text-sm">✿</span>
          </div>
        </div>

        {/* Desktop Role Eyebrow */}
        <p className={`hidden sm:block eyebrow ${isTe ? 'lang-te tracking-normal' : ''}`}>{person.role}</p>

        {/* Full Name with ample vertical clearance */}
        <div className="overflow-visible py-1">
          <h3
            className={`font-serif text-2xl sm:text-3xl text-gilt overflow-visible ${
              isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'italic py-1 leading-normal'
            }`}
          >
            {person.name}
          </h3>
        </div>

        {/* Kolam Divider */}
        <div className="my-3 flex justify-center px-4">
          <KolamBorder className="h-3.5 w-28 max-w-full" stroke="var(--theme-accent)" />
        </div>

        <p className={`text-xs sm:text-sm text-ivory/65 ${isTe ? 'lang-te' : ''}`}>
          {person.relation}
        </p>
        <p className={`mt-1 text-sm sm:text-base font-medium text-ivory/95 ${isTe ? 'lang-te' : ''}`}>
          {person.parents}
        </p>
        <p className={`mt-2 text-xs sm:text-sm leading-relaxed text-ivory/65 ${isTe ? 'lang-te' : ''}`}>
          {person.place}
        </p>
      </div>
    </Reveal>
  );
}

export function Couple() {
  const { t, isTe } = useLang();
  return (
    <section id="couple" className="py-20 sm:py-28 overflow-x-clip w-full max-w-full">
      <div className="container-luxe overflow-visible">
        <SectionHeading eyebrow={t.couple.eyebrow} title={t.couple.title} />

        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto_1fr] md:items-stretch overflow-visible">
          <PersonCard person={t.couple.bride} isTe={isTe} />

          {/* Center Connector */}
          <Reveal delay={0.1} type="bloom" className="flex items-center justify-center gap-3 md:flex-col py-1 sm:py-0">
            <LotusMedallion className="hidden sm:block h-12 w-12 sm:h-14 sm:w-14 opacity-75" stroke="var(--theme-accent)" />
            <span
              className="font-serif text-3xl sm:text-4xl text-ivory/90"
              style={{ color: 'var(--theme-accent-lt)' }}
            >
              &amp;
            </span>
            <LotusMedallion className="hidden sm:block h-12 w-12 sm:h-14 sm:w-14 opacity-75" stroke="var(--theme-accent)" spin />
          </Reveal>

          <PersonCard person={t.couple.groom} isTe={isTe} />
        </div>
      </div>
    </section>
  );
}
