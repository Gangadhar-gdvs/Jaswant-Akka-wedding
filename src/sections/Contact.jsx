import { useLang } from '../i18n.jsx';
import { PHONE_NUMBERS } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../components/Reveal.jsx';
import { MangoCorner } from '../components/Motifs.jsx';

export function Contact() {
  const { t, isTe } = useLang();
  return (
    <section id="contact" className="py-20 sm:py-28 overflow-x-clip w-full max-w-full">
      <div className="container-luxe max-w-3xl overflow-visible">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

        <p
          className={`mt-4 text-center text-xs sm:text-sm text-ivory/75 px-4 ${isTe ? 'lang-te' : ''}`}
        >
          {t.contact.intro}
        </p>

        <RevealGroup className="mx-auto mt-7 sm:mt-8 grid max-w-xl gap-3 sm:grid-cols-2 overflow-visible">
          {PHONE_NUMBERS.map((num) => (
            <RevealItem key={num}>
              <a
                href={`tel:+91${num}`}
                className="card-paper group relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5"
              >
                <MangoCorner
                  className="absolute left-2 top-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-60"
                  stroke="var(--theme-accent)"
                />

                <span className="flex items-center gap-2.5 sm:gap-3">
                  <span
                    className="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{
                      background: 'var(--btn-pill-bg)',
                      border: '1px solid var(--theme-card-border)',
                      color: 'var(--theme-accent)',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 002-2v-2.3a1 1 0 00-.76-.97l-3.6-.9a1 1 0 00-1 .34l-.9 1.1a12 12 0 01-5.2-5.2l1.1-.9a1 1 0 00.34-1l-.9-3.6A1 1 0 008.3 3H6a2 2 0 00-2 2z" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base font-medium tabular-nums tracking-wide text-ivory/90">
                    {num}
                  </span>
                </span>

                <span
                  className={`text-[11px] sm:text-xs uppercase font-medium tracking-wide transition-opacity opacity-75 group-hover:opacity-100 ${
                    isTe ? 'lang-te tracking-normal' : ''
                  }`}
                  style={{ color: 'var(--theme-accent)' }}
                >
                  {t.contact.call}
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
