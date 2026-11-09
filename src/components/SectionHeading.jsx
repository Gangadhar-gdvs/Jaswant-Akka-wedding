import { useLang } from '../i18n.jsx';
import { Reveal } from './Reveal.jsx';
import { FloralSprig } from './Motifs.jsx';

export function SectionHeading({ eyebrow, title, light = false }) {
  const { isTe } = useLang();
  return (
    <div className="text-center">
      <Reveal>
        <p className={`eyebrow ${light ? 'text-goldlight' : ''} ${isTe ? 'lang-te' : ''}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-3 font-serif text-3xl sm:text-4xl md:text-5xl ${
            light ? 'text-ivory' : 'text-maroon'
          } ${isTe ? 'lang-te serif' : 'italic'}`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className={`h-px w-10 ${light ? 'bg-goldlight/60' : 'bg-gold/50'}`} />
          <FloralSprig className={`h-5 w-16 ${light ? 'text-goldlight' : 'text-gold'}`} />
          <span className={`h-px w-10 ${light ? 'bg-goldlight/60' : 'bg-gold/50'}`} />
        </div>
      </Reveal>
    </div>
  );
}
