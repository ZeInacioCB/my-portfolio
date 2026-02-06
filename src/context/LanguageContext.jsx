import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from URL first, then localStorage/browser
    const getInitialLanguage = () => {
        const path = window.location.pathname.replace('/', '');
        if (translations[path]) return path;

        const saved = localStorage.getItem('portfolio-lang');
        if (saved && translations[saved]) return saved;

        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) return browserLang;

        return 'en';
    };

    const [language, setLanguageState] = useState(getInitialLanguage);

    // Sync state with URL and localStorage
    useEffect(() => {
        localStorage.setItem('portfolio-lang', language);
        document.documentElement.lang = language;

        // Update URL slug (except for 'en' which is root)
        const currentPath = window.location.pathname;
        const targetPath = language === 'en' ? '/' : `/${language}`;

        if (currentPath !== targetPath) {
            window.history.pushState({ lang: language }, '', targetPath);
        }
    }, [language]);

    // Handle back/forward buttons
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname.replace('/', '');
            const newLang = translations[path] ? path : 'en';
            setLanguageState(newLang);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const setLanguage = (lang) => {
        if (translations[lang]) {
            setLanguageState(lang);
        }
    };

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
