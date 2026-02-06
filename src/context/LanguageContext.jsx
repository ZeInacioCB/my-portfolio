import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from URL first
    const getInitialLanguage = () => {
        const path = window.location.pathname.replace('/', '');
        if (translations[path]) return path;

        // Default to English.
        return 'en';
    };

    const [language, setLanguageState] = useState(getInitialLanguage);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Sync state with URL
    useEffect(() => {
        document.documentElement.lang = language;

        // Update URL slug (except for 'en' which is root)
        const currentPath = window.location.pathname;
        const targetPath = language === 'en' ? '/' : `/${language}`;

        if (currentPath !== targetPath) {
            if (isInitialLoad) {
                // Use replaceState on first load to avoid adding a history entry
                window.history.replaceState({ lang: language }, '', targetPath);
            } else {
                window.history.pushState({ lang: language }, '', targetPath);
            }
        }
        setIsInitialLoad(false);
    }, [language, isInitialLoad]);

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
