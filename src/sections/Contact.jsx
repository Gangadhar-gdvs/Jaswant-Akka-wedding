import { useLang } from '../i18n.jsx';
import { PHONE_NUMBERS } from '../content.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { RevealGroup, RevealItem } from '../components/Reveal.jsx';

export function Contact() {
  const { t, isTe } = useLang();
  return (
    <section id="contact" className="bg-paper py-20 sm:py-28">
      <div className="container-luxe max-w-3xl">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

        <p className={`mt-6 text-center text-ink/70 ${isTe ? 'lang-te' : ''}`}>{t.contact.intro}</p>

        <RevealGroup className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
          {PHONE_NUMBERS.map((num) => (
            <RevealItem key={num}>
              <a
                href={`tel:+91${num}`}
                className="card-paper group flex items-center justify-between gap-3 px-5 py-4 transition-colors hover:border-gold hover:bg-gold/5"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 002-2v-2.3a1 1 0 00-.76-.97l-3.6-.9a1 1 0 00-1 .34l-.9 1.1a12 12 0 01-5.2-5.2l1.1-.9a1 1 0 00.34-1l-.9-3.6A1 1 0 008.3 3H6a2 2 0 00-2 2z" />
                    </svg>
                  </span>
                  <span className="font-medium tracking-wide text-ink/85 tabular-nums">{num}</span>
                </span>
                <span className={`text-xs uppercase tracking-wide text-gold opacity-70 transition-opacity group-hover:opacity-100 ${isTe ? 'lang-te tracking-normal' : ''}`}>
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
