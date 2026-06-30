import { useSpring, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface CountUpProps {
  target: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

const CountUp = ({ target, duration = 2, className = '', prefix = '', suffix = '' }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) {
      spring.set(target)
    }
  }, [isInView, target, spring])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      }
    })
    return unsubscribe
  }, [spring, prefix, suffix])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}

export default CountUp
