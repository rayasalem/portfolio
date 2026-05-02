import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'ar' | 'en';
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
