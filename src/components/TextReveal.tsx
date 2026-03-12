import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
}

const TextReveal = ({ text, className = '', delay = 0 }: TextRevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * 0.1 },
        },
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            rotateX: -90,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", perspective: 1000 }}
            variants={container}
            initial="hidden"
            animate={controls}
            ref={ref}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em", display: "inline-block", transformOrigin: "bottom center" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default TextReveal
