import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LangProvider, useLang } from './i18n.jsx';
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
import { Mandala } from './components/Motifs.jsx';

function Loader({ onDone }) {
  const reduce = useReducedMotion();
  const { t, isTe } = useLang();
  useEffect(() => {
    const id = setTimeout(onDone, reduce ? 200 : 1500);
    return () => clearTimeout(id);
  }, [onDone, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center">
        <Mandala className="h-24 w-24 text-gold/70" spin={!reduce} />
        <motion.p
          className={`text-gilt mt-6 text-xl ${isTe ? 'lang-te serif' : 'font-serif italic'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
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
      <main>
        <Site />
      </main>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
