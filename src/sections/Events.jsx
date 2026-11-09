import { useLang } from '../i18n.jsx';
import { CALENDAR_URL } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem, Reveal } from '../components/Reveal.jsx';
import { Diya } from '../components/Motifs.jsx';

export function Events() {
  const { t, isTe } = useLang();
  return (
    <section id="events" className="bg-paper py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} />

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {t.events.list.map((ev) => (
            <RevealItem key={ev.name}>
              <div className="card-paper h-full px-6 py-8 text-center">
                <Diya className="mx-auto h-9 w-9" />
                <h3 className={`mt-4 font-serif text-2xl text-maroon ${isTe ? 'lang-te serif' : 'italic'}`}>{ev.name}</h3>
                <div className="divider-gold mx-auto my-4 w-16" />
                <p className={`text-sm uppercase tracking-wide text-gold ${isTe ? 'lang-te tracking-normal' : ''}`}>{ev.day}</p>
                <p className={`mt-1 text-lg font-medium text-ink/90 ${isTe ? 'lang-te' : ''}`}>{ev.date}</p>
                <p className={`mt-2 text-sm text-ink/60 ${isTe ? 'lang-te' : ''}`}>{ev.time}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-5 text-center">
          <span className={`inline-block rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm text-maroon ${isTe ? 'lang-te' : 'tracking-wide'}`}>
            ✦ {t.events.note} ✦
          </span>
          <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
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
