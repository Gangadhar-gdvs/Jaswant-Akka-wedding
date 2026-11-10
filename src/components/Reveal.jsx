import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/* ─── Single element Reveal ────────────────────────────────────────────────
   type: 'fade'      — opacity + translateY (default)
         'clip'      — safe curtain reveal with generous vertical clearance
         'bloom'     — scale from 0.7 + fade (icons / lotus / motifs)
         'slideLeft' — slides in from the left (bride card)
         'slideRight'— slides in from the right (groom card)
                                                                              */
export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  type = 'fade',
  y = 20,
  as = 'div',
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  /* ── Safe curtain reveal (Extra vertical margins so ascenders & descenders are NEVER clipped) ── */
  if (type === 'clip') {
    return (
      <MotionTag
        className={className}
        style={{ overflow: 'visible' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </MotionTag>
    );
  }

  /* ── Scale bloom ── */
  if (type === 'bloom') {
    return (
      <MotionTag
        className={className}
        style={{ overflow: 'visible' }}
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </MotionTag>
    );
  }

  /* ── Slide from left ── */
  if (type === 'slideLeft') {
    return (
      <MotionTag
        className={className}
        style={{ overflow: 'visible' }}
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </MotionTag>
    );
  }

  /* ── Slide from right ── */
  if (type === 'slideRight') {
    return (
      <MotionTag
        className={className}
        style={{ overflow: 'visible' }}
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </MotionTag>
    );
  }

  /* ── Depth fade-up (default: 'fade') ── */
  return (
    <MotionTag
      className={className}
      style={{ overflow: 'visible' }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ─── SplitText ─────────────────────────────────────────────────────────────
   Word-by-word animation with ample padding & visible overflow
   so Telugu vattulu and Latin ascenders/descenders are completely protected.  */
export function SplitText({ children, className = '', delay = 0, stagger = 0.06, as = 'span' }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.span;

  const words = typeof children === 'string' ? children.split(' ') : [children];

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={`inline-block ${className}`}
      style={{ overflow: 'visible' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{
            marginRight: '0.28em',
            overflow: 'visible',
            paddingTop: '0.15em',
            paddingBottom: '0.25em',
            verticalAlign: 'baseline',
          }}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: EASE },
            },
          }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* ─── RevealGroup (staggered container) ────────────────────────────────────*/
export function RevealGroup({ children, className = '', stagger = 0.12 }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ overflow: 'visible' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

/* ─── RevealItem (child of RevealGroup) ─────────────────────────────────────*/
export function RevealItem({ children, className = '', y = 18 }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ overflow: 'visible' }}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
