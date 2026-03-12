import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)

    // Mouse position
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for the cursor follower
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (hoveredRect) {
                // Magnetic snap to center of the hovered element
                const centerX = hoveredRect.left + hoveredRect.width / 2
                const centerY = hoveredRect.top + hoveredRect.height / 2
                mouseX.set(centerX - 16)
                mouseY.set(centerY - 16)
            } else {
                mouseX.set(e.clientX - 16)
                mouseY.set(e.clientY - 16)
            }
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsHovering(true)
        const handleMouseUp = () => setIsHovering(false)

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const clickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                target.closest('input') ||
                target.closest('textarea')

            setIsHovering(!!clickable)
            if (clickable) {
                setHoveredRect(clickable.getBoundingClientRect())
            } else {
                setHoveredRect(null)
            }
        }

        const handleScroll = () => {
            if (hoveredRect) setHoveredRect(null)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isVisible, mouseX, mouseY, hoveredRect])

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
                        scale: isHovering && hoveredRect ? Math.min(Math.max(hoveredRect.width, hoveredRect.height) / 32, 1.2) : (isHovering ? 1.2 : 0.5),
                        opacity: isHovering && hoveredRect ? 0.3 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            </motion.div>
        </>
    )
}

export default CustomCursor
