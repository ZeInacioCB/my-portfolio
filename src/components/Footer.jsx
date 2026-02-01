import { useLanguage } from '../context/LanguageContext';

function Footer() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                {t.footer.text}{' '}
                {t.footer.links.map((link, index) => (
                    <span key={link.name}>
                        <a
                            href={link.url}
                            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.name}
                        </a>
                        {index < t.footer.links.length - 1 ? (index === t.footer.links.length - 2 ? ' and ' : ', ') : '.'}
                    </span>
                ))}
            </p>

            {/* Language Switcher moved to footer */}
            <div className="mt-8 flex gap-4 text-xs font-bold uppercase tracking-widest">
                {['en', 'pt', 'es'].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`transition-colors hover:text-slate-200 cursor-pointer ${language === lang ? 'text-teal-300' : 'text-slate-500'
                            }`}
                    >
                        {lang}
                    </button>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
