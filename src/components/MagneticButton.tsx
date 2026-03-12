import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
    href?: string
}

const MagneticButton = ({ children, className = '', onClick, href }: MagneticButtonProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()

        // Calculate center of button
        const centerX = left + width / 2
        const centerY = top + height / 2

        // Distance from center
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY

        x.set(distanceX * 0.2) // Weak magnetic pull
        y.set(distanceY * 0.2)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: 0, y: 0 }}
            style={{ x: xSpring, y: ySpring }}
            className={`inline-block ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )

    if (href) {
        return (
            <a href={href} className="inline-block relative z-20">
                {content}
            </a>
        )
    }

    return <div className="inline-block relative z-20">{content}</div>
}

export default MagneticButton
