import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    distance = 20,
    width = 'fit-content',
    threshold = 0,
    margin = "-100px",
    once = true
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once, amount: threshold, margin: margin }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
