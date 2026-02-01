import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage or browser settings, default to 'en'
    const getInitialLanguage = () => {
        const saved = localStorage.getItem('portfolio-lang');
        if (saved && translations[saved]) return saved;

        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) return browserLang;

        return 'en';
    };

    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem('portfolio-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
