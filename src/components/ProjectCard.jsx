import CardTechChips from './CardTechChips';

function ProjectCard({ project }) {
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-secondary">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium leading-tight text-secondary hover:text-primary focus-visible:text-primary group/link text-base"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={project.title}
                            >
                                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                                <span>{project.title}</span>
                            </a>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-text-main">
                        {project.description}
                    </p>
                    <CardTechChips tech={project.tech} />
                </div>
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    width="200"
                    height="120"
                    className="rounded border-2 border-secondary/10 transition group-hover:border-secondary/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
            </div>
        </li>
    );
}

export default ProjectCard;
