function Main() {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div>
                    <p className="mb-4 text-slate-400">
                        Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web design. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                    </p>
                    <p className="mb-4 text-slate-400">
                        My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                    </p>
                </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {[1, 2].map((i) => (
                            <li key={i} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                        2024 — Present
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label="Senior Software Engineer at Company">
                                                    <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                                                    <span>Senior Software Engineer · Company</span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, and more.
                                        </p>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            <li className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                                            </li>
                                            <li className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                </div>
                <div>
                    <ul className="group/list">
                        {[1, 2].map((i) => (
                            <li key={i} className="mb-12">
                                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <div className="z-10 sm:order-2 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label="Project Title">
                                                    <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                                                    <span>Project Title {i}</span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            A brief description of this cool project you worked on recently. It solves a specific problem and has some unique features.
                                        </p>
                                    </div>
                                    <img src="https://placehold.co/200x120/0f172a/94a3b8?text=Project" alt="Project image" loading="lazy" width="200" height="120" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                <p>
                    Built with <a href="#" className="font-medium text-slate-400 hover:text-teal-300">React</a> and <a href="#" className="font-medium text-slate-400 hover:text-teal-300">Tailwind CSS</a>.
                </p>
            </footer>
        </main>
    );
}

export default Main;