function ExperienceCard({ exp }) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.dates}>
                    {exp.dates}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
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
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                        {exp.description}
                    </p>
                    {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="mt-2 list-disc pl-4 text-sm text-slate-400">
                            {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="mt-1">{achievement}</li>
                            ))}
                        </ul>
                    )}
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {exp.tech.map((skill) => (
                            <li key={skill} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default ExperienceCard;
