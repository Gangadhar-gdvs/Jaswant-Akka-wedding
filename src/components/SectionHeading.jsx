import { useLang } from '../i18n.jsx';
import { Reveal } from './Reveal.jsx';
import { KolamBorder } from './Motifs.jsx';

export function SectionHeading({ eyebrow, title }) {
  const { isTe } = useLang();

  return (
    <div className="text-center overflow-visible">
      <Reveal>
        <p className={`eyebrow ${isTe ? 'lang-te' : ''}`}>
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-visible py-1">
          <h2
            className={`mt-1.5 font-serif text-3xl sm:text-4xl md:text-5xl text-ivory overflow-visible ${
              isTe ? 'lang-te serif py-2 leading-relaxed' : 'italic py-1 leading-normal'
            }`}
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.35)' }}
          >
            {title}
          </h2>
        </div>
      </Reveal>

      {/* Auspicious Kolam divider */}
      <Reveal delay={0.16}>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span
            className="h-px w-10 sm:w-16"
            style={{ background: 'linear-gradient(90deg, transparent, var(--theme-accent))', opacity: 0.6 }}
          />
          <KolamBorder
            className="h-4 w-44 sm:w-56"
            stroke="var(--theme-accent)"
          />
          <span
            className="h-px w-10 sm:w-16"
            style={{ background: 'linear-gradient(90deg, var(--theme-accent), transparent)', opacity: 0.6 }}
          />
        </div>
      </Reveal>
    </div>
  );
}
