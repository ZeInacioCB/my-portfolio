import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 -mb-2 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:mb-4 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    {t.nav.about}
                </h2>
            </div>
            <div>
                {t.about.paragraphs.map((paragraph, index) => (
                    <ScrollReveal key={index} delay={index * 0.1} width="full" margin="0px">
                        <p
                            className="mb-4 text-slate-400"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}

export default About;
