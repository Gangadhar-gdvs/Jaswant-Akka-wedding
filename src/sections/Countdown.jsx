import { useState, useEffect } from 'react';
import { useLang } from '../i18n.jsx';
import { WEDDING_ISO } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { LotusMedallion, Diya } from '../components/Motifs.jsx';

const TARGET = new Date(WEDDING_ISO).getTime();

function diff() {
  const now = Date.now();
  let delta = Math.max(0, TARGET - now);
  const days = Math.floor(delta / 86400000); delta -= days * 86400000;
  const hours = Math.floor(delta / 3600000); delta -= hours * 3600000;
  const mins = Math.floor(delta / 60000); delta -= mins * 60000;
  const secs = Math.floor(delta / 1000);
  return { days, hours, mins, secs, done: TARGET - now <= 0 };
}

function Unit({ value, label, isTe }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="card-paper relative flex h-16 w-16 items-center justify-center sm:h-24 sm:w-24"
        style={{
          clipPath: 'polygon(8% 0%, 92% 0%, 100% 8%, 100% 100%, 0% 100%, 0% 8%)',
        }}
      >
        <span
          className="font-serif text-2xl sm:text-4xl tabular-nums text-gilt"
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span
        className={`mt-2 text-[10px] uppercase sm:text-xs text-ivory/70 ${
          isTe ? 'lang-te tracking-normal' : 'tracking-[0.15em] sm:tracking-[0.2em]'
        }`}
      >
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
    <section id="countdown" className="relative py-20 sm:py-28 text-ivory overflow-hidden w-full max-w-full">
      {/* Subtle Lotus Medallion Watermark (safely bounded) */}
      <LotusMedallion
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        stroke="var(--theme-accent)"
        spin
      />

      {/* Decorative Diyas on Desktop */}
      <div className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-65">
        <Diya className="h-12 w-12" flickerClass="animate-flicker" />
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-65">
        <Diya className="h-12 w-12" flickerClass="animate-flicker2" />
      </div>

      <div className="container-luxe relative z-10">
        <SectionHeading eyebrow={t.countdown.eyebrow} title={t.countdown.title} />

        {time.done ? (
          <Reveal className="mt-10 text-center">
            <p
              className={`font-serif text-2xl text-ivory ${isTe ? 'lang-te serif' : 'italic'}`}
              style={{ color: 'var(--theme-accent-lt)' }}
            >
              {t.countdown.done}
            </p>
          </Reveal>
        ) : (
          <Reveal className="mt-9 sm:mt-11 flex items-start justify-center gap-2 sm:gap-6 max-w-full overflow-x-clip px-2">
            <Unit value={time.days} label={labels.days} isTe={isTe} />
            <Unit value={time.hours} label={labels.hours} isTe={isTe} />
            <Unit value={time.mins} label={labels.mins} isTe={isTe} />
            <Unit value={time.secs} label={labels.secs} isTe={isTe} />
          </Reveal>
        )}

        <Reveal delay={0.1} className="mt-8 text-center px-4">
          <p className={`text-xs sm:text-sm text-ivory/70 ${isTe ? 'lang-te' : 'tracking-wide'}`}>
            {t.countdown.sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
