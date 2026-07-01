import { motion } from 'framer-motion'

const AvailabilityBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans text-xs font-bold uppercase tracking-widest"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      Open to Work
    </motion.div>
  )
}

export default AvailabilityBadge
