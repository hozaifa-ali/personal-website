import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Frontend', value: 90 },
  { name: 'Backend', value: 85 },
  { name: 'DevOps', value: 70 },
  { name: 'Mobile', value: 65 },
  { name: 'Databases', value: 80 },
  { name: 'Systems', value: 60 },
]

const SkillsRadar = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cx = 150
  const cy = 150
  const radius = 120
  const levels = 4
  const angleSlice = (Math.PI * 2) / skills.length

  const getPoint = (value: number, index: number) => {
    const r = (value / 100) * radius
    const angle = angleSlice * index - Math.PI / 2
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    }
  }

  const dataPath = skills
    .map((skill, i) => {
      const p = getPoint(skill.value, i)
      return `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
    })
    .join(' ') + ' Z'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="retro-card p-6 sm:p-8"
    >
      <h3 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-6 uppercase text-shadow-retro">
        Skill Radar
      </h3>
      <div className="flex justify-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-[300px]">
          {/* Grid levels */}
          {Array.from({ length: levels }, (_, i) => {
            const r = ((i + 1) / levels) * radius
            const points = skills
              .map((_, j) => {
                const angle = angleSlice * j - Math.PI / 2
                return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
              })
              .join(' ')
            return (
              <polygon
                key={`level-${i}`}
                points={points}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-300 dark:text-gray-700"
                strokeDasharray="4 2"
              />
            )
          })}

          {/* Axis lines */}
          {skills.map((_, i) => {
            const p = getPoint(100, i)
            return (
              <line
                key={`axis-${i}`}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-300 dark:text-gray-700"
              />
            )
          })}

          {/* Data area */}
          <motion.path
            d={dataPath}
            fill="rgba(16, 185, 129, 0.15)"
            stroke="#10b981"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Data points */}
          {skills.map((skill, i) => {
            const p = getPoint(skill.value, i)
            return (
              <motion.circle
                key={`point-${i}`}
                cx={p.x}
                cy={p.y}
                r="5"
                fill="#10b981"
                stroke="#0a0a0a"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]"
              />
            )
          })}

          {/* Labels */}
          {skills.map((skill, i) => {
            const p = getPoint(115, i)
            const isTop = p.y < cy
            const isLeft = p.x < cx
            return (
              <text
                key={`label-${i}`}
                x={p.x}
                y={p.y}
                textAnchor={isLeft ? 'end' : p.x === cx ? 'middle' : 'start'}
                dominantBaseline={isTop ? 'auto' : 'hanging'}
                className="fill-gray-900 dark:fill-gray-200 text-[11px] font-sans font-bold uppercase"
              >
                {skill.name}
              </text>
            )
          })}
        </svg>
      </div>
    </motion.div>
  )
}

export default SkillsRadar
