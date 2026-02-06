export const translations = {
    en: {
        seo: {
            title: "ZeInacioCB   | Software Engineer Portfolio",
            description: "Portfolio of ZeInacioCB, a Software Engineer specializing in scalable, high-performance, and SEO-driven web applications.",
            keywords: "Software Engineer, Frontend Engineer, React, NextJS, JavaScript, Portfolio, ZeInacioCB"
        },
        header: {
            name: "ZeInacioCB",
            title: "Software Engineer",
            description: "Driven to build scalable, high-performance, and SEO-driven web applications. Currently deepening my Backend Engineering skills.",
            socials: [
                { id: 'github', url: 'https://github.com/ZeInacioCB' },
                { id: 'linkedin', url: 'https://www.linkedin.com/in/jose-inacio-castelo-branco/' }
            ]
        },
        nav: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
        },
        about: {
            paragraphs: [
                "I’m a Software Engineer and Frontend Engineer with 3+ years of experience building fast, scalable, and SEO-friendly web applications. My work focuses on turning ideas into clean, reliable, and maintainable products, with strong attention to performance, user experience, and long-term scalability.",
                "With a background in Industrial Engineering, I approach software development with a practical, structured mindset. I care about efficiency, clarity, and building solutions that hold up over time, whether that means improving an existing platform or shipping new features.",
                "At <a href='https://oddsscannergroup.com' target='_blank' rel='noopener noreferrer'>OddsScanner Group</a>, I work on large-scale production platforms such as <a href='https://oddsscanner.com' target='_blank' rel='noopener noreferrer'>oddsscanner.com</a>, where I helped rebuild and modernise core products using React, NextJS, and TailwindCSS. My contributions often focus on performance optimisation, Core Web Vitals, accessibility, and responsive, cross-platform interfaces for high-traffic websites.",
                "As a freelancer, I support teams with frontend development, React and NextJS builds, performance and SEO improvements, and scalable UI systems. I also work with PHP, SQL/MySQL, and WordPress, and I’m comfortable jumping into existing codebases, collaborating remotely, and owning features end to end.",
            ]
        },
        experience: [
            {
                dates: '01/2025 — Present',
                title: 'Software Engineer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Work on the development and modernisation of large-scale, high-traffic web platforms, contributing across the stack with a strong focus on frontend engineering, performance, SEO, and scalability.',
                achievements: [
                    'Rebuilt a large-scale web platform, delivering a modern and responsive user experience.',
                    'Improved Google PageSpeed performance scores on key pages from ~60 to 75+',
                    'Achieved 90+ Accessibility scores on key pages.',
                    'Achieved SEO scores up to 100 on key pages.',
                    'Optimised Core Web Vitals, reducing CLS by over 80% and improving LCP by more than 1 second on critical pages.',
                    'Identified and resolved issues in production, significantly reducing error logs and improving overall application reliability.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'HTML & CSS', 'SEO', 'RestAPI']
            },
            {
                dates: '01/2023 — 01/2025',
                title: 'Junior Software Developer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Built and maintained multiple custom projects using modern web technologies. Focused on performance, SEO and accessibility.',
                achievements: [
                    'Developed and maintained modular, reusable UI components',
                    'Supported 10+ websites with maintenance and feature updates',
                    'Built 5+ websites using a custom WordPress and PHP stack, ensuring consistency, maintainability, and performance.',
                    'Ongoing performance and SEO optimisation, focusing on page speed improvements, technical audits, and search rankings visibility.',
                ],
                tech: ['PHP', 'JavaScript', 'RestAPI', 'Responsive Design', 'Wordpress', 'MySQL', 'HTML & CSS', 'SEO']
            },
            {
                dates: '01/2023 — Present',
                title: 'Software Developer',
                company: 'Freelancer',
                link: '#',
                description: 'Collaborating with clients to design and build responsive, performance-focused web applications and features, working across the stack from frontend implementation to backend integrations.',
                achievements: [
                    'Developed a backend feature using PHP and WordPress to integrate and synchronize data with external platforms, ensuring seamless data flow with tools such as Atlas and Rainbow Map (rainbowmap.ilga-europe.org, contraception.srhrpolicyhub.org).',
                    'Designed and built responsive frontend applications using Vanilla JavaScript and Bootstrap, with a strong focus on performance, accessibility, and cross-browser compatibility.',
                    'Developed custom portfolio and showcase websites from scratch, handling layout, interactivity, and responsive design (e.g. rodrigoalb.com).',
                    'Implemented frontend animations and interactive components using modern JavaScript to enhance user experience.',
                    'Worked independently across the full development lifecycle, from requirements gathering and implementation to testing, deployment, and maintenance.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'Prisma', 'PHP', 'Wordpress', 'MySQL', 'HTML & CSS', 'Bootstrap', 'JavaScript']
            }
        ],
        projects: [
            {
                title: 'Oddsscanner',
                thumbnail: '/OddsscannerProjectThumbnail.webp',
                description: 'A large-scale, SEO-driven, performance-focused web platform built with NextJS, React and Tailwind CSS.',
                link: 'https://oddsscanner.com',
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Core Web Vitals']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'A multi-language developer portfolio built with React and Vite, and styled with Tailwind CSS.',
                link: 'https://zeinaciocb.dev/',
                tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'i18n']
            },
            {
                title: 'Cinematographer Portfolio',
                thumbnail: '/RodrigoalbProjectThumbnail.webp',
                description: 'A simple cinematographer portfolio built with Vanilla JavaScript and Bootstrap.',
                link: 'https://rodrigoalb.com',
                tech: ['JavaScript', 'Bootstrap', 'HTML & CSS', 'Responsive Design']
            },
            {
                title: 'Correio Braziliense Apostas',
                thumbnail: '/CorreioBrazilienseApostasThumbnail.webp',
                description: 'An SEO-driven website partnership built during my time at OddsScanner Group, using a custom stack built with PHP, MySQL, JavaScript and WordPress.',
                link: 'https://www.correiobraziliense.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance', 'Responsive Design']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'An SEO-driven website focused on performance and accessibility built with a custom stack using PHP, MySQL, JavaScript and WordPress during my time at OddsScanner Group.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance', 'Responsive Design']
            }
        ],
        footer: {
            text: 'Built with <a href="https://react.dev/" target="_blank" rel="noreferrer"   >React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, developed with <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, deployed with <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>. Made by <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">ZeInacioCB</a>'
        },
        viewResume: 'View Full Resume',
        resumeUrl: '/JoseInacioCasteloBranc_SoftwareEngineer_20260130.pdf'
    },
    pt: {
        seo: {
            title: "ZeInacioCB | Portfólio de Software Engineer",
            description: "Portfólio de ZeInacioCB, Software Engineer especializado em aplicações web escaláveis, de alta performance e otimizadas para SEO.",
            keywords: "Software Engineer, Frontend Engineer, React, NextJS, JavaScript, Portfólio, ZeInacioCB"
        },
        header: {
            name: "ZeInacioCB",
            title: "Software Engineer",
            description: "Dedicado a construir produtos e experiências digitais acessíveis e inclusivas para a web. Actualmente interessado em aprofundar as minhas skills de Backend Engineering.",
            socials: [
                { id: 'github', url: 'https://github.com/ZeInacioCB' },
                { id: 'linkedin', url: 'https://www.linkedin.com/in/jose-inacio-castelo-branco/' }
            ]
        },
        nav: {
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
        },
        about: {
            paragraphs: [
                "Sou Software Engineer e Frontend Engineer com mais de 3 anos de experiência no desenvolvimento de aplicações web rápidas, escaláveis e otimizadas para SEO. O meu trabalho centra-se em transformar ideias em produtos limpos, fiáveis e fáceis de manter, com forte atenção ao desempenho, à experiência do utilizador e à escalabilidade a longo prazo.",
                "Com formação em Engenharia Industrial, abordo o desenvolvimento de software com uma mentalidade prática e estruturada. Valorizo a eficiência, a clareza e a criação de soluções sólidas e duradouras, quer seja a melhorar uma plataforma existente ou a lançar novas funcionalidades.",
                "Na OddsScanner Group, trabalho em plataformas de produção de grande escala, como <a href='https://oddsscanner.com' target='_blank' rel='noopener noreferrer'>oddsscanner.com</a>, onde participo na reconstrução e modernização do produto utilizando React, NextJS e TailwindCSS. As minhas contribuições focam-se frequentemente na otimização de desempenho, Core Web Vitals, acessibilidade e interfaces responsivas e multiplataforma para websites de elevado tráfego.",
                "Como freelancer, apoio equipas no desenvolvimento frontend, em projetos com React e NextJS, otimização de performance e SEO, e criação de interfaces escaláveis. Trabalho também com PHP, SQL/MySQL e WordPress, e sinto-me confortável a integrar codebases existentes, colaborar remotamente e assumir responsabilidade de funcionalidades de ponta a ponta."
            ]
        },
        experience: [
            {
                dates: '01/2025 — Presente',
                title: 'Software Engineer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Trabalho no desenvolvimento e modernização de grandes escala, plataformas web de alto tráfego, contribuindo em todo o stack com um forte foco na engenharia de frontend, performance, SEO e escalabilidade.',
                achievements: [
                    'Reconstrução de uma plataforma web de grande escala com uma experiência moderna e responsiva.',
                    'Melhoria das pontuações do Google PageSpeed em páginas-chave de ~60 para 75+',
                    'Alcance de pontuações de Acessibilidade superiores a 90 em páginas-chave.',
                    'Alcance de pontuações de SEO até 100 em páginas-chave.',
                    'Otimização de Core Web Vitals, reduzindo o CLS em +80% e melhorando o LCP em +1s em páginas críticas.',
                    'Identificação e resolução de problemas em produção, reduzindo significativamente os logs de erros e melhorando a fiabilidade geral da aplicação.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'HTML & CSS', 'SEO', 'RestAPI']
            },
            {
                dates: '01/2023 — 01/2025',
                title: 'Junior Software Developer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Desenvolvimento e manutenção de vários projetos personalizados utilizando tecnologias web modernas, com foco em desempenho, SEO e acessibilidade.',
                achievements: [
                    'Desenvolvimento e manutenção de componentes de UI modulares e reutilizáveis.',
                    'Suporte contínuo a +10 websites com manutenção e atualizações de funcionalidades.',
                    'Desenvolvimento de 5+ sites utilizando uma stack personalizada em WordPress e PHP, garantindo consistência, manutenibilidade e desempenho.',
                    'Otimização contínua de desempenho e SEO, com foco na melhoria da velocidade das páginas, auditorias técnicas e visibilidade nos rankings de pesquisa.',
                ],
                tech: ['PHP', 'JavaScript', 'RestAPI', 'Responsive Design', 'Wordpress', 'MySQL', 'HTML & CSS', 'SEO']
            },
            {
                dates: '01/2023 — Presente',
                title: 'Software Developer',
                company: 'Freelancer',
                link: '/',
                description: 'Colaboração com clientes no design e desenvolvimento de aplicações web e funcionalidades responsivas e orientadas ao desempenho, trabalhando em toda a stack desde a implementação frontend até integrações backend.',
                achievements: [
                    'Desenvolvimento de uma funcionalidade backend em PHP e WordPress para integrar e sincronizar dados externos, garantindo um fluxo de dados contínuo (rainbowmap.ilga-europe.org, contraception.srhrpolicyhub.org).',
                    'Desenvolvimento de aplicações frontend responsivas utilizando Vanilla JavaScript e Bootstrap, com foco no desempenho, acessibilidade e compatibilidade entre navegadores.',
                    'Criação de websites de portfólio e showcase personalizados a partir do zero, gerindo layout, interatividade e design responsivo (rodrigoalb.com).',
                    'Trabalho independente em todo o ciclo de desenvolvimento, desde o levantamento de requisitos e implementação até testes, deploy e manutenção.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'Prisma', 'PHP', 'Wordpress', 'MySQL', 'HTML & CSS', 'Bootstrap', 'JavaScript']
            }
        ],
        projects: [
            {
                title: 'Oddsscanner',
                thumbnail: '/OddsscannerProjectThumbnail.webp',
                description: 'Plataforma web de grande escala, orientada a SEO e focada no desempenho. Desenvolvida com NextJS, React e Tailwind CSS.',
                link: 'https://oddsscanner.com',
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Core Web Vitals']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'O meu portfólio multi-idioma construído com React e Vite, com styling em Tailwind CSS e implementado com Vercel.',
                link: 'https://zeinaciocb.dev/',
                tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'i18n']
            },
            {
                title: 'Cinematographer Portfolio',
                thumbnail: '/RodrigoalbProjectThumbnail.webp',
                description: 'Portfólio de cinematógrafo desenvolvido com Vanilla JavaScript e Bootstrap.',
                link: 'https://rodrigoalb.com',
                tech: ['JavaScript', 'Bootstrap', 'HTML & CSS', 'Responsive Design']
            },
            {
                title: 'Correio Braziliense Apostas',
                thumbnail: '/CorreioBrazilienseApostasThumbnail.webp',
                description: 'Parceria de website orientado a SEO desenvolvida durante o meu tempo na OddsScanner Group, utilizando uma stack personalizada com PHP, MySQL, JavaScript e WordPress.',
                link: 'https://www.correiobraziliense.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Responsive Design']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'Website orientado a SEO, focado em desempenho e acessibilidade, desenvolvido durante o meu tempo na OddsScanner Group com uma stack personalizada em PHP, MySQL, JavaScript e WordPress.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Responsive Design']
            }
        ],
        footer: {
            text: 'Construído com <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, desenvolvido com <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, implementado com <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>, e feito por <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">ZeInacioCB</a>'
        },
        viewResume: 'Ver Currículo Completo',
        resumeUrl: '/JoseInacioCasteloBranco_SoftwareEngineer_20260206_PT.pdf'
    },
    es: {
        seo: {
            title: "ZeInacioCB | Portafolio de Software Engineer",
            description: "Portafolio de ZeInacioCB, Software Engineer especializado en aplicaciones web escalables, de alto rendimiento y optimizadas para SEO.",
            keywords: "Software Engineer, Frontend Engineer, React, NextJS, JavaScript, Portafolio, ZeInacioCB"
        },
        header: {
            name: "ZeInacioCB",
            title: "Software Engineer",
            description: "Construyo productos y experiencias digitales accesibles e inclusivas para la web. Actualmente me dedico a aprofundar mis skills de Backend Engineering.",
            socials: [
                { id: 'github', url: 'https://github.com/ZeInacioCB' },
                { id: 'linkedin', url: 'https://www.linkedin.com/in/jose-inacio-castelo-branco/' }
            ]
        },
        nav: {
            about: 'Sobre mí',
            experience: 'Experiencia',
            projects: 'Proyectos',
        },
        about: {
            paragraphs: [
                "Soy Software Engineer y Frontend Engineer con más de 3 años de experiencia desarrollando aplicaciones web rápidas, escalables y optimizadas para SEO. Mi trabajo se centra en transformar ideas en productos limpios, fiables y mantenibles, con una fuerte atención al rendimiento, la experiencia de usuario y la escalabilidad a largo plazo.",
                "Con formación en Ingeniería Industrial, afronto el desarrollo de software con una mentalidad práctica y estructurada. Valoro la eficiencia, la claridad y la creación de soluciones sólidas y duraderas, ya sea mejorando una plataforma existente o lanzando nuevas funcionalidades.",
                "En OddsScanner Group, trabajo en plataformas de producción de gran escala como <a href='https://oddsscanner.com' target='_blank' rel='noopener noreferrer'>oddsscanner.com</a>, donde ayudé a reconstruir y modernizar productos clave utilizando React, NextJS y TailwindCSS. Mis contribuciones suelen centrarse en la optimización del rendimiento, Core Web Vitals, accesibilidad e interfaces responsivas y multiplataforma para sitios web de alto tráfico.",
                "Como freelance, apoyo a equipos en desarrollo frontend, proyectos con React y NextJS, mejoras de rendimiento y SEO, y sistemas de UI escalables. También trabajo con PHP, SQL/MySQL y WordPress, y me adapto fácilmente a bases de código existentes, colaboración remota y gestión de funcionalidades de principio a fin."
            ]
        },
        experience: [
            {
                dates: '01/2025 — Presente',
                title: 'Software Engineer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Desarrollo y modernización de plataformas web de gran escala y alto tráfico, contribuyendo a lo largo de toda la stack con un fuerte enfoque en frontend, rendimiento, SEO y escalabilidad.',
                achievements: [
                    'Reconstrucción de una plataforma web de gran escala desde cero, ofreciendo una experiencia de usuario moderna, responsiva y multiplataforma.',
                    'Mejora de las puntuaciones de Google PageSpeed en páginas clave de aproximadamente 60 a 75+.',
                    'Obtención de puntuaciones de Accesibilidad superiores a 90 en páginas clave.',
                    'Obtención de puntuaciones de SEO de hasta 100 en páginas clave.',
                    'Optimización de Core Web Vitals, reduciendo CLS en más del 80% y mejorando LCP en más de 1s en páginas críticas.',
                    'Identificación y resolución de problemas en producción, reduciendo significativamente los registros de errores y mejorando la fiabilidad de la aplicación.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'HTML & CSS', 'SEO', 'RestAPI']
            },
            {
                dates: '01/2023 — 01/2025',
                title: 'Junior Software Developer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Desarrollo y mantenimiento de múltiples proyectos personalizados utilizando tecnologías web modernas, con enfoque en rendimiento, SEO y accesibilidad.',
                achievements: [
                    'Desarrollo y mantenimiento de componentes de UI modulares y reutilizables.',
                    'Soporte continuo a +10 sitios web mediante tareas de mantenimiento y actualizaciones de funcionalidades.',
                    'Desarrollo de +5 sitios web utilizando una stack personalizada en WordPress y PHP, garantizando consistencia, mantenibilidad y rendimiento.',
                    'Optimización continua de rendimiento y SEO, con enfoque en la mejora de la velocidad de las páginas, auditorías técnicas y visibilidad en los rankings de búsqueda.',
                ],
                tech: ['PHP', 'JavaScript', 'RestAPI', 'Responsive Design', 'Wordpress', 'MySQL', 'HTML & CSS', 'SEO']
            },
            {
                dates: '01/2023 — Presente',
                title: 'Software Developer',
                company: 'Freelancer',
                link: '#',
                description: 'Colaboración con clientes en el diseño y desarrollo de aplicaciones web y funcionalidades responsivas y orientadas al rendimiento, trabajando a lo largo de toda la stack desde la implementación frontend hasta integraciones backend.',
                achievements: [
                    'Desarrollo de una funcionalidad backend en PHP y WordPress para integrar y sincronizar datos con plataformas externas, garantizando un flujo de datos continuo con herramientas como Atlas y Rainbow Map (rainbowmap.ilga-europe.org, contraception.srhrpolicyhub.org).',
                    'Diseño y desarrollo de aplicaciones frontend responsivas utilizando JavaScript puro y Bootstrap, con un fuerte enfoque en rendimiento, accesibilidad y compatibilidad entre navegadores.',
                    'Creación de sitios web de portafolio y showcase personalizados desde cero, gestionando layout, interactividad y diseño responsivo (por ejemplo, rodrigoalb.com).',
                    'Trabajo independiente a lo largo de todo el ciclo de desarrollo, desde la recopilación de requisitos y la implementación hasta pruebas, despliegue y mantenimiento.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'Prisma', 'PHP', 'Wordpress', 'MySQL', 'HTML & CSS', 'Bootstrap', 'JavaScript']
            }
        ],
        projects: [
            {
                title: 'Oddsscanner',
                thumbnail: '/OddsscannerProjectThumbnail.webp',
                description: 'Plataforma web de gran escala, orientada a SEO y centrada en el rendimiento, desarrollada con NextJS, React y Tailwind CSS.',
                link: 'https://oddsscanner.com',
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Core Web Vitals']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'Mi portafolio de desarrollador multiidioma construido con React y Vite, estilizado con Tailwind CSS y desplegado en Vercel.',
                link: 'https://zeinaciocb.dev/',
                tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'i18n']
            },
            {
                title: 'Cinematographer Portfolio',
                thumbnail: '/RodrigoalbProjectThumbnail.webp',
                description: 'Portafolio de cinematógrafo desarrollado con Vanilla JavaScript y Bootstrap.',
                link: 'https://rodrigoalb.com',
                tech: ['JavaScript', 'Bootstrap', 'HTML & CSS', 'Responsive Design']
            },
            {
                title: 'Correio Braziliense Apostas',
                thumbnail: '/CorreioBrazilienseApostasThumbnail.webp',
                description: 'UColaboración en un sitio web orientado a SEO desarrollada durante mi etapa en OddsScanner Group, utilizando una stack personalizada con PHP, MySQL, JavaScript y WordPress.',
                link: 'https://www.correiobraziliense.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance', 'Responsive Design']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'Sitio web orientado a SEO, centrado en rendimiento y accesibilidad, desarrollado durante mi etapa en OddsScanner Group con una stack personalizada basada en PHP, MySQL, JavaScript y WordPress.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance', 'Responsive Design']
            }
        ],
        footer: {
            text: 'Construido con <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, desarrollado con <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, implementado con <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>, y hecho por <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">Ze Inácio Castelo Branco</a>'
        },
        viewResume: 'Ver Currículum Completo',
        resumeUrl: '/JoseInacioCasteloBranco_SoftwareEngineer_20260206_ES.pdf'
    }
};
