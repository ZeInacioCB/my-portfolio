import CardTechChips from './CardTechChips';

function ExperienceCard({ exp }) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2" aria-label={exp.dates}>
                    {exp.dates}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-secondary">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium leading-tight text-secondary hover:text-primary focus-visible:text-primary group/link text-base"
                                href={exp.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${exp.title} at ${exp.company}`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                                <span>{exp.title} · {exp.company}</span>
                            </a>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-text-main">
                        {exp.description}
                    </p>
                    {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="mt-2 list-disc pl-4 text-sm text-text-main">
                            {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="mt-1">{achievement}</li>
                            ))}
                        </ul>
                    )}
                    <CardTechChips tech={exp.tech} />
                </div>
            </div>
        </li>
    );
}

export default ExperienceCard;
