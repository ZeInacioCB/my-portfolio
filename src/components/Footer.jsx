import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ScrollReveal from './ScrollReveal';

function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full pb-16 text-sm text-text-muted sm:pb-0">
            <ScrollReveal width="full" delay={0.2}>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
                    <p className="flex-1 text-text-muted text-center sm:text-left">
                        <span dangerouslySetInnerHTML={{ __html: t.footer.text }} />
                    </p>
                    <div className="w-full sm:w-auto flex-shrink-0">
                        <LanguageSwitcher />
                    </div>
                </div>
            </ScrollReveal>
        </footer>
    );
}

export default Footer;
