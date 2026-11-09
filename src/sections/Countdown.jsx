import { useState, useEffect } from 'react';
import { useLang } from '../i18n.jsx';
import { WEDDING_ISO } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Mandala } from '../components/Motifs.jsx';

const TARGET = new Date(WEDDING_ISO).getTime();

function diff() {
  const now = Date.now();
  let delta = Math.max(0, TARGET - now);
  const days = Math.floor(delta / 86400000);
  delta -= days * 86400000;
  const hours = Math.floor(delta / 3600000);
  delta -= hours * 3600000;
  const mins = Math.floor(delta / 60000);
  delta -= mins * 60000;
  const secs = Math.floor(delta / 1000);
  return { days, hours, mins, secs, done: TARGET - now <= 0 };
}

function Unit({ value, label, isTe }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-md border border-gold/40 bg-maroondark/40 sm:h-24 sm:w-24">
        <span className="font-serif text-3xl text-goldlight sm:text-4xl tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className={`mt-3 text-[10px] uppercase tracking-[0.2em] text-ivory/70 sm:text-xs ${isTe ? 'lang-te tracking-normal' : ''}`}>
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { t, isTe } = useLang();
  const [time, setTime] = useState(diff);

  useEffect(() => {
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const { labels } = t.countdown;

  return (
    <section id="countdown" className="relative overflow-hidden bg-maroon-deep py-20 text-ivory sm:py-28">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-gold/5" spin />

      <div className="container-luxe relative z-10">
        <SectionHeading eyebrow={t.countdown.eyebrow} title={t.countdown.title} light />

        {time.done ? (
          <Reveal className="mt-12 text-center">
            <p className={`font-serif text-2xl text-goldlight ${isTe ? 'lang-te serif' : 'italic'}`}>{t.countdown.done}</p>
          </Reveal>
        ) : (
          <Reveal className="mt-12 flex items-start justify-center gap-3 sm:gap-6">
            <Unit value={time.days} label={labels.days} isTe={isTe} />
            <Unit value={time.hours} label={labels.hours} isTe={isTe} />
            <Unit value={time.mins} label={labels.mins} isTe={isTe} />
            <Unit value={time.secs} label={labels.secs} isTe={isTe} />
          </Reveal>
        )}

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className={`text-sm text-ivory/70 ${isTe ? 'lang-te' : 'tracking-wide'}`}>{t.countdown.sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
