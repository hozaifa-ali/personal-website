import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import { useState, useEffect } from 'react'

const GitHubHeatmap = () => {
  const [blockSize, setBlockSize] = useState(12)
  const [hideLabels, setHideLabels] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setBlockSize(8)
        setHideLabels(true)
      } else if (window.innerWidth < 600) {
        setBlockSize(10)
        setHideLabels(false)
      } else {
        setBlockSize(14)
        setHideLabels(false)
      }
    }
    
    // Initial call
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="retro-card p-4 sm:p-10 mb-12 sm:mb-16 md:mb-24 flex flex-col items-center overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-8 w-full">
        <h3 className="text-xl sm:text-2xl font-mono font-bold text-gray-900 dark:text-white uppercase text-shadow-retro">
          GitHub Contributions
        </h3>
        <div className="h-1 flex-1 max-w-24 bg-gray-900 dark:bg-emerald-500" />
      </div>
      
      <div className="w-full flex justify-center overflow-hidden" style={{ transform: hideLabels ? 'scale(0.9)' : 'scale(1)', transformOrigin: 'center left' }}>
        <GitHubCalendar 
          username="hozaifa-ali" 
          colorScheme="dark"
          blockSize={blockSize}
          blockMargin={4}
          // @ts-ignore - undocumented props
          hideColorLegend={hideLabels}
          // @ts-ignore
          hideMonthLabels={hideLabels}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#1f2937', '#064e3b', '#047857', '#10b981', '#34d399'],
          }}
          style={{
            fontFamily: 'monospace',
          }}
        />
      </div>
    </motion.div>
  )
}

export default GitHubHeatmap
