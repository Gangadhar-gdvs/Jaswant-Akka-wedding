import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { content } from './content.js';

const LangContext = createContext(null);
const STORAGE_KEY = 'kare-wedding-lang';

function getInitial() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'te' || saved === 'en' ? saved : 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitial);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', content[lang].meta.description);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === 'en' ? 'te' : 'en'));
  }, []);

  const value = {
    lang,
    isTe: lang === 'te',
    t: content[lang],
    setLang,
    toggle,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
