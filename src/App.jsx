import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LangProvider, useLang } from './i18n.jsx';
import { ThemeProvider } from './theme.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './sections/Hero.jsx';
import { Couple } from './sections/Couple.jsx';
import { Invitation } from './sections/Invitation.jsx';
import { Events } from './sections/Events.jsx';
import { Countdown } from './sections/Countdown.jsx';
import { Family } from './sections/Family.jsx';
import { Venue } from './sections/Venue.jsx';
import { Contact } from './sections/Contact.jsx';
import { Closing } from './sections/Closing.jsx';
import { LotusMedallion } from './components/Motifs.jsx';

function Loader({ onDone }) {
  const reduce = useReducedMotion();
  const { t, isTe } = useLang();
  useEffect(() => {
    const id = setTimeout(onDone, reduce ? 200 : 1200);
    return () => clearTimeout(id);
  }, [onDone, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'var(--site-bg)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <LotusMedallion className="h-20 w-20 text-gold/80" stroke="var(--theme-accent)" spin={!reduce} />
        <motion.p
          className={`text-gilt mt-5 text-xl ${isTe ? 'lang-te serif' : 'font-serif italic'}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {t.closing.names}
        </motion.p>
      </div>
    </motion.div>
  );
}

function Site() {
  const { lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        className="w-full max-w-full overflow-x-hidden"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduce ? undefined : { opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Hero />
        <Couple />
        <Invitation />
        <Events />
        <Countdown />
        <Family />
        <Venue />
        <Contact />
        <Closing />
      </motion.div>
    </AnimatePresence>
  );
}

function AppInner() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <Navbar />
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Site />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppInner />
      </LangProvider>
    </ThemeProvider>
  );
}
