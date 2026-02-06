import { useLanguage } from '../context/LanguageContext';
import ExperienceCard from './ExperienceCard';
import ResumeButton from './ResumeButton';
import ScrollReveal from './ScrollReveal';

function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-0 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:mb-4 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
                    {t.nav.experience}
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {t.experience.map((exp, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="full">
                            <ExperienceCard exp={exp} />
                        </ScrollReveal>
                    ))}
                </ol>
                <ScrollReveal delay={0.1}>
                    <div className="mt-12">
                        <ResumeButton />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default Experience;
