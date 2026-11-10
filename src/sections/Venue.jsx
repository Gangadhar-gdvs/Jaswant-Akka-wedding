import { useLang } from '../i18n.jsx';
import { MAP_URL } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { MangoCorner, KolamBorder } from '../components/Motifs.jsx';

export function Venue() {
  const { t, isTe } = useLang();
  return (
    <section id="venue" className="relative py-20 sm:py-28 text-ivory overflow-x-clip w-full max-w-full">
      <div className="container-luxe relative z-10 max-w-3xl overflow-visible">
        <SectionHeading eyebrow={t.venue.eyebrow} title={t.venue.title} />

        <Reveal delay={0.12} type="bloom" className="mt-9 sm:mt-11">
          <div className="card-paper relative mx-auto max-w-xl px-5 py-8 text-center sm:px-10 sm:py-9 overflow-visible">
            {/* Mango Corners */}
            <MangoCorner className="absolute left-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute right-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-x-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute bottom-2.5 left-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-y-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute bottom-2.5 right-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />

            {/* Map Pin Icon */}
            <div
              className="mx-auto mb-3.5 sm:mb-4 flex items-center justify-center rounded-full"
              style={{
                border: '1px solid var(--theme-card-border)',
                background: 'var(--btn-pill-bg)',
                color: 'var(--theme-accent-lt)',
                width: '48px',
                height: '48px',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            {/* Venue Name */}
            <div className="overflow-visible py-1">
              <h3
                className={`font-serif text-xl sm:text-3xl text-gilt overflow-visible ${
                  isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'italic py-1 leading-normal'
                }`}
              >
                {t.venue.name}
              </h3>
            </div>

            {/* Kolam Divider */}
            <div className="my-3 flex justify-center px-4">
              <KolamBorder className="h-3.5 w-32 sm:w-36 max-w-full" stroke="var(--theme-accent)" />
            </div>

            {/* Address */}
            <address className={`not-italic leading-relaxed text-xs sm:text-sm text-ivory/80 px-2 ${isTe ? 'lang-te' : ''}`}>
              {t.venue.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>

            {/* Directions Button */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5 sm:mt-6"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              {t.venue.directions}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
