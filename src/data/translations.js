export const translations = {
    en: {
        header: {
            name: "Zé Inácio Castelo Branco",
            title: "Software Engineer",
            description: "Driven to build scalable, high-performance, and SEO-driven web applications.",
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
                    'Rebuilt a large-scale web platform from scratch, delivering a modern, responsive, and cross-platform user experience.',
                    'Improved Google PageSpeed performance scores on key pages from ~60 to 75+',
                    'Achieved 90+ Accessibility scores on key pages.',
                    'Achieved SEO scores up to 100 on key pages.',
                    'Optimised Core Web Vitals, reducing CLS by over 80% and improving LCP by more than 1 second on critical pages.',
                    'Identified and resolved frontend issues in production, significantly reducing error logs and improving overall application reliability.',
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
                dates: '01/2023 — 01/2025',
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
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'SEO']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'A multi-language developer portfolio built with React and Vite, and styled with Tailwind CSS.',
                link: 'https://my-portfolio-zeinacio.vercel.app/',
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
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'An SEO-driven website focused on performance and accessibility built with a custom stack using PHP, MySQL, JavaScript and WordPress during my time at OddsScanner Group.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance']
            }
        ],
        footer: {
            text: 'Built with <a href="https://react.dev/" target="_blank" rel="noreferrer"   >React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, developed with <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, deployed with <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>. Made by <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">ZeInacioCB</a>'
        },
        viewResume: 'View Full Resume',
        resumeUrl: '/JoseInacioCasteloBranc_SoftwareEngineer_20260130.pdf'
    },
    pt: {
        header: {
            name: "Zé Inácio Castelo Branco",
            title: "Software Engineer",
            description: "Eu construo produtos e experiências digitais acessíveis e inclusivas para a web.",
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
                "Sou Software Engineer com mais de 3 anos de experiência a desenvolver web apps rápidas, escaláveis e fáceis de usar. Gosto de trabalhar em produtos onde performance, SEO e estrutura do código fazem realmente a diferença, e de transformar ideias em soluções sólidas prontas para produção.",
                "Tenho formação em Engenharia Industrial, o que influencia bastante a forma como abordo os problemas: procurar simplicidade, eficiência e soluções que se mantenham fiáveis ao longo do tempo. Essa base ajuda-me tanto a melhorar plataformas existentes como a construir novas funcionalidades de raiz.",
                "Atualmente trabalho em plataformas web de grande escala, como <a href='https://oddsscanner.com' target='_blank' rel='noopener noreferrer'>oddsscanner.com</a>, onde participo na modernização do produto com React, NextJS e TailwindCSS. Uma parte importante do meu trabalho passa por melhorar Core Web Vitals, performance, acessibilidade e comportamento responsivo em páginas com elevado tráfego.",
                "Como freelancer, apoio equipas no desenvolvimento frontend, em projetos com React e NextJS, otimização de performance e SEO, e criação de interfaces escaláveis. Trabalho também com PHP, SQL/MySQL e WordPress, e sinto-me confortável a integrar-me em codebases existentes, colaborar remotamente e assumir responsabilidade por funcionalidades de ponta a ponta."
            ]
        },
        experience: [
            {
                dates: '01/2025 — Present',
                title: 'Software Engineer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Trabalho no desenvolvimento e modernização de grandes escala, plataformas web de alto tráfego, contribuindo em todo o stack com um forte foco na engenharia de frontend, performance, SEO e escalabilidade.',
                achievements: [
                    'Construí uma plataforma web de grande escala desde zero, entregando uma experiência de usuário moderna, respondente e cross-platform.',
                    'Melhorei os scores de performance do Google PageSpeed nas páginas-chave de ~60 para 75+',
                    'Alcançei 90+ scores de acessibilidade nas páginas-chave.',
                    'Alcançei scores de SEO até 100 nas páginas-chave.',
                    'Optimisei os Core Web Vitals, reduzindo o CLS em mais de 80% e melhorando o LCP por mais de 1 segundo nas páginas críticas.',
                    'Identifiquei e resolvi problemas de frontend em produção, significativamente reduzindo logs de erros e melhorando a confiabilidade geral da aplicação.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'HTML & CSS', 'SEO', 'RestAPI']
            },
            {
                dates: '01/2023 — 01/2025',
                title: 'Junior Software Developer',
                company: 'OddsScanner Group',
                link: 'https://oddsscannergroup.com',
                description: 'Desenvolvi e mantive múltiplos projetos personalizados usando tecnologias web modernas. Foco em performance, SEO e acessibilidade.',
                achievements: [
                    'Desenvolvi e mantive componentes UI modulares e reutilizáveis',
                    'Suporte a 10+ sites com atualizações de manutenção e funcionalidades',
                    'Construí 5+ sites usando uma pilha personalizada WordPress e PHP, garantindo consistência, manutenibilidade e performance.',
                    'Otimização contínua de performance e SEO, focando em melhorias de velocidade de página, auditorias técnicas e visibilidade de classificações de busca.',
                ],
                tech: ['PHP', 'JavaScript', 'RestAPI', 'Responsive Design', 'Wordpress', 'MySQL', 'HTML & CSS', 'SEO']
            },
            {
                dates: '01/2023 — 01/2025',
                title: 'Software Developer',
                company: 'Freelancer',
                link: '/',
                description: 'Colaborando com clientes para projetar e construir aplicações web front-end responsivas e otimizadas para performance, trabalhando em todo o stack desde a implementação do frontend até as integrações de backend.',
                achievements: [
                    'Desenvolvi uma funcionalidade de backend usando PHP e WordPress para integrar e sincronizar dados com plataformas externas, garantindo um fluxo de dados semântico com ferramentas como Atlas e Rainbow Map (rainbowmap.ilga-europe.org, contraception.srhrpolicyhub.org).',
                    'Desenvolvi e construí aplicações web front-end responsivas usando Vanilla JavaScript e Bootstrap, com um forte foco em performance, acessibilidade e compatibilidade com navegadores.',
                    'Desenvolvi sites de portfólio e showcase personalizados desde zero, lidando com layout, interatividade e design responsivo (rodrigoalb.com).',
                    'Implementei animações e componentes interativos usando JavaScript moderno para melhorar a experiência do usuário.',
                    'Trabalhei independentemente ao longo do ciclo de desenvolvimento completo, desde a coleta de requisitos e implementação até testes, implantação e manutenção.',
                ],
                tech: ['React', 'NextJS', 'Tailwind CSS', 'Responsive Design', 'Prisma', 'PHP', 'Wordpress', 'MySQL', 'HTML & CSS', 'Bootstrap', 'JavaScript']
            }
        ],
        projects: [
            {
                title: 'Oddsscanner',
                thumbnail: '/OddsscannerProjectThumbnail.webp',
                description: 'Um website de grande escala, focado em SEO e Performance, construído com NextJS, React e Tailwind CSS.',
                link: 'https://oddsscanner.com',
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'SEO']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'Um portfólio com múltiplos idiomas construído com React, Vite e Tailwind CSS e implementado com Vercel.',
                link: 'https://my-portfolio-zeinacio.vercel.app/',
                tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'i18n']
            },
            {
                title: 'Cinematographer Portfolio',
                thumbnail: '/RodrigoalbProjectThumbnail.webp',
                description: 'Um portfólio cinematógrafico construído apenas com Vanilla JavaScript e Bootstrap.',
                link: 'https://rodrigoalb.com',
                tech: ['JavaScript', 'Bootstrap', 'HTML & CSS', 'Responsive Design']
            },
            {
                title: 'Correio Braziliense Apostas',
                thumbnail: '/CorreioBrazilienseApostasThumbnail.webp',
                description: 'Um website de parceria SEO-driven, construído enquanto trabalhava na OddsScanner Group, usando uma stack personalizada com PHP, MySQL, JavaScript e WordPress.',
                link: 'https://www.correiobraziliense.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'Um website construído usando uma stack personalizada com PHP, MySQL, JavaScript e WordPress. Focado em SEO e Performance e construído tendo em conta os requisitos de um website de parceria.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance']
            }
        ],
        footer: {
            text: 'Construído com <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, desenvolvido com <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, implementado com <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>, e feito por <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">ZeInacioCB</a>'
        },
        viewResume: 'Ver Currículo Completo',
        resumeUrl: '/resume-pt.pdf'
    },
    es: {
        header: {
            name: "Zé Inácio Castelo Branco",
            title: "Software Engineer",
            description: "Construyo productos y experiencias digitales accesibles e inclusivas para la web.",
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
                "Soy Software Engineer con más de 3 años de experiencia desarrollando aplicaciones web rápidas, escalables y fáciles de usar. Me gusta trabajar en productos donde la performance, el SEO y una buena estructura del código son clave, y convertir ideas en soluciones sólidas listas para producción.",
                "Mi formación en Ingeniería Industrial ha marcado mucho mi forma de resolver problemas: buscar simplicidad, eficiencia y soluciones que funcionen bien a largo plazo. Este enfoque me resulta especialmente útil tanto al mejorar plataformas existentes como al desarrollar nuevas funcionalidades.",
                "Actualmente trabajo en plataformas web de gran escala, como <a href='https://oddsscanner.com' target='_blank' rel='noopener noreferrer'>oddsscanner.com</a>, donde participo en la modernización del producto utilizando React, NextJS y TailwindCSS. Gran parte de mi trabajo se centra en mejorar Core Web Vitals, performance, accesibilidad y comportamiento responsive en páginas con alto volumen de tráfico.",
                "Como freelancer, ayudo a equipos con desarrollo frontend, proyectos en React y NextJS, optimización de performance y SEO, y construcción de interfaces escalables. También trabajo con PHP, SQL/MySQL y WordPress, y me adapto fácilmente a proyectos ya existentes, colaboración remota y responsabilidad completa sobre funcionalidades."
            ]
        },
        experience: [
            {
                dates: '01/2024 — Presente',
                title: 'Ingeniero de Software Senior',
                company: 'Empresa',
                link: 'https://example.com',
                description: 'Entrega de código de producción robusto y de alta calidad para una variedad de proyectos para clientes como Harvard Business School, Everytown for Gun Safety y más.',
                achievements: [],
                tech: ['React', 'TypeScript', 'Tailwind CSS']
            }
        ],
        projects: [
            {
                title: 'Oddsscanner',
                thumbnail: '/OddsscannerProjectThumbnail.webp',
                description: 'Un sitio web de gran escala, SEO-driven y con un enfoque en performance, construido con NextJS, React y Tailwind CSS.',
                link: 'https://oddsscanner.com',
                tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'SEO']
            },
            {
                title: 'ZeInacioCB Portfolio',
                thumbnail: '/MyPortfolioProjectThumbnail.webp',
                description: 'Un portafolio multilenguaje construido con React y Vite, y estilizado con Tailwind CSS.',
                link: 'https://my-portfolio-zeinacio.vercel.app/',
                tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'i18n']
            },
            {
                title: 'Cinematographer Portfolio',
                thumbnail: '/RodrigoalbProjectThumbnail.webp',
                description: 'Un simple portafolio cinematógrafico construido con Vanilla JavaScript e Bootstrap.',
                link: 'https://rodrigoalb.com',
                tech: ['JavaScript', 'Bootstrap', 'HTML & CSS', 'Responsive Design']
            },
            {
                title: 'Correio Braziliense Apostas',
                thumbnail: '/CorreioBrazilienseApostasThumbnail.webp',
                description: 'Un sitio web de parceria SEO-driven construido durante mi tiempo en OddsScanner Group, utilizando un stack personalizado construido con PHP, MySQL, JavaScript y WordPress.',
                link: 'https://www.correiobraziliense.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO']
            },
            {
                title: 'NoAtaque Apostas',
                thumbnail: '/NoAtaqueApostasThumbnail.webp',
                description: 'Un sitio web de parceria SEO-driven enfocado en performance y accesibilidad construido con un stack personalizado utilizando PHP, MySQL, JavaScript y WordPress durante mi tiempo en OddsScanner Group.',
                link: 'https://noataque.com.br/apostas/',
                tech: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'SEO', 'Performance']
            }
        ],
        footer: {
            text: 'Construido con <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, desarrollado con <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a> & <a href="https://antigravity.google/" target="_blank" rel="noreferrer">Antigravity</a>, implementado con <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>, y hecho por <a href="https://github.com/ZeInacioCB" target="_blank" rel="noreferrer">Ze Inácio Castelo Branco</a>'
        },
        viewResume: 'Ver Currículum Completo',
        resumeUrl: '/resume-es.pdf'
    }
};
