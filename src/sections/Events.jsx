import { useLang } from '../i18n.jsx';
import { CALENDAR_URL } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem, Reveal } from '../components/Reveal.jsx';
import { Diya, MangoCorner, KolamBorder } from '../components/Motifs.jsx';

function EventCard({ ev, isTe }) {
  return (
    <div className="card-paper relative h-full px-5 py-7 sm:px-6 sm:py-8 text-center overflow-visible">
      {/* Mango Corners */}
      <MangoCorner className="absolute left-2.5 top-2.5 h-6 w-6" stroke="var(--theme-accent)" style={{ opacity: 0.55 }} />
      <MangoCorner className="absolute right-2.5 top-2.5 h-6 w-6 -scale-x-100" stroke="var(--theme-accent)" style={{ opacity: 0.55 }} />

      {/* Auspicious Diya */}
      <div className="flex justify-center">
        <Diya className="h-8 w-8 sm:h-9 sm:w-9" flickerClass="animate-flicker" />
      </div>

      {/* Event Name */}
      <div className="overflow-visible py-1">
        <h3
          className={`mt-2 font-serif text-xl sm:text-2xl text-gilt overflow-visible ${
            isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'italic py-1 leading-normal'
          }`}
        >
          {ev.name}
        </h3>
      </div>

      {/* Kolam Divider */}
      <div className="my-2.5 sm:my-3 flex justify-center px-4">
        <KolamBorder className="h-3.5 w-24 max-w-full" stroke="var(--theme-accent)" />
      </div>

      {/* Day */}
      <p className={`eyebrow ${isTe ? 'lang-te tracking-normal' : ''}`}>
        {ev.day}
      </p>

      {/* Date */}
      <p className={`mt-1 text-sm sm:text-lg font-medium text-ivory/95 ${isTe ? 'lang-te' : ''}`}>
        {ev.date}
      </p>

      {/* Time */}
      <p className={`mt-1 text-xs sm:text-sm text-ivory/70 ${isTe ? 'lang-te' : ''}`}>
        {ev.time}
      </p>
    </div>
  );
}

export function Events() {
  const { t, isTe } = useLang();
  return (
    <section id="events" className="py-20 sm:py-28 overflow-x-clip w-full max-w-full">
      <div className="container-luxe overflow-visible">
        <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} />

        <RevealGroup className="mx-auto mt-10 sm:mt-12 grid max-w-3xl gap-5 sm:gap-6 sm:grid-cols-2 overflow-visible">
          {t.events.list.map((ev) => (
            <RevealItem key={ev.name}>
              <EventCard ev={ev} isTe={isTe} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Auspicious Muhurtham Note + Calendar Button */}
        <Reveal delay={0.1} className="mt-8 sm:mt-9 flex flex-col items-center gap-3.5 sm:gap-4 text-center px-4">
          <span
            className={`inline-block rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium ${
              isTe ? 'lang-te' : 'tracking-wide'
            }`}
            style={{
              border: '1px solid var(--theme-card-border)',
              background: 'var(--btn-pill-bg)',
              color: 'var(--theme-accent-lt)',
            }}
          >
            ✦ {t.events.note} ✦
          </span>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="4.5" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 2.5v4M16 2.5v4" strokeLinecap="round" />
            </svg>
            <span className={isTe ? 'lang-te' : ''}>{t.events.addToCalendar}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
