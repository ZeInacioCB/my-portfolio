import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 -mb-2 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:mb-4 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
                    {t.nav.projects}
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {t.projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="full">
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
