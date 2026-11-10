import { useLang } from '../i18n.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Kalasha, MangoCorner, KolamBorder } from '../components/Motifs.jsx';

export function Invitation() {
  const { t, isTe } = useLang();
  const bride = t.couple.bride;
  const groom = t.couple.groom;

  return (
    <section id="invitation" className="py-20 sm:py-28 text-ivory overflow-x-clip w-full max-w-full">
      <div className="container-luxe relative z-10 max-w-3xl text-center overflow-visible">
        {/* Sacred Kalasha */}
        <Reveal type="bloom">
          <div className="flex justify-center">
            <Kalasha className="h-12 w-10 sm:h-14 sm:w-11" stroke="var(--theme-accent)" />
          </div>
        </Reveal>

        {/* Eyebrow */}
        <Reveal delay={0.08}>
          <p className={`eyebrow mt-3.5 sm:mt-4 ${isTe ? 'lang-te tracking-normal' : ''}`}>
            {t.invitation.eyebrow}
          </p>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.15}>
          <div className="overflow-visible py-1">
            <h2
              className={`mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-ivory overflow-visible ${
                isTe ? 'lang-te serif py-2 leading-relaxed' : 'italic py-1 leading-normal'
              }`}
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.35)' }}
            >
              {t.invitation.title}
            </h2>
          </div>
        </Reveal>

        {/* Kolam Divider */}
        <Reveal delay={0.22}>
          <div className="mt-4 flex justify-center px-4">
            <KolamBorder className="h-4 w-48 sm:w-64 max-w-full" stroke="var(--theme-accent)" />
          </div>
        </Reveal>

        {/* ── Ceremonial Wedding Invitation Card ── */}
        <Reveal delay={0.28}>
          <div className="card-paper relative mx-auto mt-8 max-w-2xl px-5 py-8 sm:px-10 sm:py-11 text-center overflow-visible">
            {/* Mango Corner Accents */}
            <MangoCorner className="absolute left-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute right-2.5 top-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-x-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute bottom-2.5 left-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-y-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />
            <MangoCorner className="absolute bottom-2.5 right-2.5 h-6 w-6 sm:h-7 sm:w-7 -scale-100" stroke="var(--theme-accent)" style={{ opacity: 0.6 }} />

            {/* ── Tier 1: Inviting Parents (Host Dignity) ── */}
            <div className="mb-6 overflow-visible">
              <p className={`eyebrow text-[11px] sm:text-xs mb-1.5 ${isTe ? 'lang-te tracking-normal' : ''}`}>
                {isTe ? 'ఆహ్వానించువారు' : 'Cordially Invited By'}
              </p>
              <h4
                className={`font-serif text-lg sm:text-2xl text-ivory font-medium overflow-visible ${
                  isTe ? 'lang-te serif py-1 leading-relaxed' : 'py-0.5 leading-normal'
                }`}
              >
                {bride.parents}
              </h4>
              <p
                className={`mt-1.5 text-xs sm:text-sm text-ivory/70 max-w-md mx-auto leading-relaxed ${
                  isTe ? 'lang-te' : ''
                }`}
              >
                {isTe
                  ? 'తమ కుటుంబ సమేతంగా మిమ్మల్ని మరియు మీ బంధుమిత్రులను సాదరంగా ఆహ్వానిస్తున్నారు'
                  : 'cordially invite you, along with your family and friends, to the auspicious wedding of their'}
              </p>
            </div>

            {/* Subtle Divider */}
            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 opacity-30" style={{ background: 'var(--theme-accent)' }} />
              <span className="text-xs" style={{ color: 'var(--theme-accent)' }}>❖</span>
              <span className="h-px w-16 opacity-30" style={{ background: 'var(--theme-accent)' }} />
            </div>

            {/* ── Tier 2: The Sacred Union Centerpiece (Bride & Groom) ── */}
            <div className="my-6 overflow-visible">
              {/* Bride */}
              <div className="overflow-visible">
                <p className={`eyebrow text-[10px] sm:text-xs ${isTe ? 'lang-te tracking-normal' : ''}`}>
                  {isTe ? 'పెద్ద కుమార్తె' : 'Elder Daughter'}
                </p>
                <h3
                  className={`font-serif text-2xl sm:text-4xl text-gilt overflow-visible font-semibold mt-0.5 ${
                    isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'italic py-1 leading-normal'
                  }`}
                >
                  {bride.name}
                </h3>
              </div>

              {/* Auspicious "with / తో" Connector */}
              <div className="my-2 sm:my-2.5 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-10 sm:w-14 opacity-35" style={{ background: 'var(--theme-accent)' }} />
                <span
                  className="font-serif text-base sm:text-xl text-ivory/80 italic"
                  style={{ color: 'var(--theme-accent-lt)' }}
                >
                  {isTe ? 'వివాహం' : 'with'}
                </span>
                <span className="h-px w-10 sm:w-14 opacity-35" style={{ background: 'var(--theme-accent)' }} />
              </div>

              {/* Groom */}
              <div className="overflow-visible">
                <h3
                  className={`font-serif text-2xl sm:text-4xl text-gilt overflow-visible font-semibold ${
                    isTe ? 'lang-te serif py-1.5 leading-relaxed' : 'italic py-1 leading-normal'
                  }`}
                >
                  {groom.name}
                </h3>
                <p className={`eyebrow text-[10px] sm:text-xs mt-1 ${isTe ? 'lang-te tracking-normal' : ''}`}>
                  {isTe ? 'పెద్ద కుమారుడు' : 'Elder Son of'}
                </p>
                <p
                  className={`font-serif text-sm sm:text-lg text-ivory/90 mt-1 overflow-visible ${
                    isTe ? 'lang-te serif py-0.5' : ''
                  }`}
                >
                  {groom.parents}
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="my-5 sm:my-6 flex justify-center">
              <span className="h-px w-28 sm:w-36 opacity-35" style={{ background: 'var(--theme-accent)' }} />
            </div>

            {/* ── Tier 3: Warm Blessings & Presence Request ── */}
            <p
              className={`text-xs sm:text-base italic leading-relaxed px-2 ${
                isTe ? 'lang-te not-italic' : 'font-serif'
              }`}
              style={{ color: 'var(--theme-accent-lt)' }}
            >
              {t.invitation.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
