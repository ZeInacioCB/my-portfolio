import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/useIsMobile';

function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isMobile = useIsMobile();

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Português' },
        { code: 'es', label: 'Español' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && isOpen) return;

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, isMobile]);

    const handleSelect = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative w-1/2 mx-auto sm:w-auto" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2 px-3 py-2 sm:py-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-teal-300 focus:outline-none bg-slate-800/50 rounded-md border border-slate-700/50 cursor-pointer"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>{language}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Desktop Dropdown */}
            <AnimatePresence>
                {isOpen && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full right-0 mb-2 w-32 origin-bottom-right rounded-md bg-slate-900 shadow-2xl ring-1 ring-white/10 focus:outline-none z-[100] overflow-hidden"
                    >
                        <div className="py-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    className={`block w-full px-4 py-2 text-left text-xs font-bold uppercase tracking-widest transition-colors hover:bg-slate-800 cursor-pointer ${language === lang.code ? 'text-teal-300' : 'text-slate-400'
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Bottom Drawer */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/40 backdrop-blur-[2px]"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Drawer Content */}
                        <motion.div
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.8 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.y > 100 || info.velocity.y > 500) {
                                    setIsOpen(false);
                                }
                            }}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                            className="relative w-full rounded-t-3xl bg-slate-900 p-6 shadow-2xl pb-12 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Drawer Handle */}
                            <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-slate-700 active:bg-slate-600 transition-colors" />

                            <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
                                Select Language
                            </h3>

                            <div className="grid gap-3">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleSelect(lang.code)}
                                        className={`flex w-full items-center justify-between rounded-2xl px-5 py-5 text-sm font-bold uppercase tracking-widest transition-colors active:bg-slate-800 border ${language === lang.code
                                            ? 'bg-teal-400/10 text-teal-300 border-teal-300/30'
                                            : 'text-slate-300 bg-slate-800/50 border-transparent'
                                            }`}
                                    >
                                        <span>{lang.label}</span>
                                        {language === lang.code && (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 w-full rounded-xl px-4 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors active:text-slate-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default LanguageSwitcher;
