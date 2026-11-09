import { useLang } from '../i18n.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Mandala, CornerFlourish } from '../components/Motifs.jsx';

function PersonCard({ person, isTe, delay }) {
  return (
    <Reveal delay={delay} className="relative">
      <div className="card-paper relative px-6 py-10 text-center sm:px-8">
        <CornerFlourish className="absolute left-3 top-3 h-7 w-7 text-gold/60" />
        <CornerFlourish className="absolute right-3 top-3 h-7 w-7 -scale-x-100 text-gold/60" />
        <CornerFlourish className="absolute bottom-3 left-3 h-7 w-7 -scale-y-100 text-gold/60" />
        <CornerFlourish className="absolute bottom-3 right-3 h-7 w-7 -scale-100 text-gold/60" />

        <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center">
          <Mandala className="absolute inset-0 text-gold/40" />
          <span className={`font-serif text-4xl text-maroon ${isTe ? 'lang-te serif' : 'italic'}`}>
            {person.name.replace(/^K\.\s*|^కే\.\s*/, '').charAt(0)}
          </span>
        </div>

        <p className={`eyebrow ${isTe ? 'lang-te tracking-normal' : ''}`}>{person.role}</p>
        <h3 className={`mt-2 font-serif text-3xl text-maroon ${isTe ? 'lang-te serif' : 'italic'}`}>{person.name}</h3>

        <div className="divider-gold mx-auto my-5 w-24" />

        <p className={`text-sm text-ink/60 ${isTe ? 'lang-te' : ''}`}>{person.relation}</p>
        <p className={`mt-1 text-base font-medium text-ink/90 ${isTe ? 'lang-te' : ''}`}>{person.parents}</p>
        <p className={`mt-3 text-sm leading-relaxed text-ink/60 ${isTe ? 'lang-te' : ''}`}>{person.place}</p>
      </div>
    </Reveal>
  );
}

export function Couple() {
  const { t, isTe } = useLang();
  return (
    <section id="couple" className="bg-paper py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.couple.eyebrow} title={t.couple.title} />
        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <PersonCard person={t.couple.bride} isTe={isTe} delay={0} />
          <Reveal delay={0.1} className="flex items-center justify-center">
            <span className="font-serif text-4xl text-gold sm:text-5xl">&amp;</span>
          </Reveal>
          <PersonCard person={t.couple.groom} isTe={isTe} delay={0.15} />
        </div>
      </div>
    </section>
  );
}
