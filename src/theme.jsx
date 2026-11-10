import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'kare-wedding-theme-v3';

// Two unified South Indian wedding themes:
//  'traditional' -> Royal Temple Maroon, Sandalwood & Temple Gold (unified continuous luxury canvas)
//  'card-blue'   -> Divine Sky-to-Sapphire Blue, Silver & Temple Gold (matching public/wedding-card.jfif)

function getInitial() {
  if (typeof window === 'undefined') return 'traditional';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'card-blue' || saved === 'traditional' ? saved : 'traditional';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'traditional' ? 'card-blue' : 'traditional'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', getInitial());
  }, []);

  const isTraditional = theme === 'traditional';
  const isCardBlue = theme === 'card-blue';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isTraditional,
        isCardBlue,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
