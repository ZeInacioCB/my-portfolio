import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full pb-16 text-sm text-slate-500 sm:pb-0">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4">
                <p className="flex-1 text-slate-500 text-center sm:text-left">
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
                <div className="w-full sm:w-auto flex-shrink-0">
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
