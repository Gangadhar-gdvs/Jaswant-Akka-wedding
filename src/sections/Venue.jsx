import { useLang } from '../i18n.jsx';
import { MAP_URL } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { TempleSilhouette } from '../components/Motifs.jsx';

export function Venue() {
  const { t, isTe } = useLang();
  return (
    <section id="venue" className="relative overflow-hidden bg-maroon-deep py-20 text-ivory sm:py-28">
      <TempleSilhouette className="pointer-events-none absolute inset-x-0 top-0 h-20 w-full rotate-180 text-maroondark/60 sm:h-28" />

      <div className="container-luxe relative z-10 max-w-3xl">
        <SectionHeading eyebrow={t.venue.eyebrow} title={t.venue.title} light />

        <Reveal delay={0.12} className="mt-12">
          <div className="card-paper mx-auto max-w-xl bg-ivory/95 px-6 py-10 text-center sm:px-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <h3 className={`font-serif text-2xl text-maroon sm:text-3xl ${isTe ? 'lang-te serif' : 'italic'}`}>{t.venue.name}</h3>
            <div className="divider-gold mx-auto my-5 w-20" />
            <address className={`not-italic leading-relaxed text-ink/75 ${isTe ? 'lang-te' : ''}`}>
              {t.venue.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
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
