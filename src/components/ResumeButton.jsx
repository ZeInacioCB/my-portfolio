import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ResumeButton = () => {
    const { t } = useLanguage();

    return (
        <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 active:text-teal-300 active:scale-95 transition-all group/link text-base"
            href={t.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.viewResume}
        >
            <motion.span
                className="flex items-center"
                initial={{ textShadow: "0 0 0px rgba(94, 234, 212, 0)", filter: "brightness(1)" }}
                whileInView={{
                    textShadow: [
                        "0 0 0px rgba(94, 234, 212, 0)",
                        "0 0 20px rgba(94, 234, 212, 0.8)",
                        "0 0 0px rgba(94, 234, 212, 0)"
                    ],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                    color: ["#e2e8f0", "#5eead4", "#e2e8f0"]
                }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{
                    delay: 0.3,
                    duration: 0.7,
                    times: [0, 0.5, 1]
                }}
            >
                {t.viewResume}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-active/link:-translate-y-1 group-active/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </motion.span>
        </a>
    );
};

export default ResumeButton;
