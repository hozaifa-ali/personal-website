import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Mouse position
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for the cursor follower
    const springConfig = { damping: 25, stiffness: 700 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16)
            mouseY.set(e.clientY - 16)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsHovering(true)
        const handleMouseUp = () => setIsHovering(false)

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if the target or its parents are clickable
            const isClickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA'

            setIsHovering(!!isClickable)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [isVisible, mouseX, mouseY])

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="w-full h-full rounded-full bg-white"
                    animate={{
                        scale: isHovering ? 2.5 : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </>
    )
}

export default CustomCursor
