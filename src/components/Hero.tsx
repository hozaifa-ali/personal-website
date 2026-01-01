import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import HeroSocials from './HeroSocials'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-12 bg-gradient-to-b from-gray-50/20 via-white/10 to-white/10 dark:from-gray-950/20 dark:via-black/10 dark:to-black/10 backdrop-blur-[2px]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-brand-green font-mono text-xs tracking-[0.2em] uppercase font-medium"
              >
                Software Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 dark:text-white tracking-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="block mt-2 relative z-20">
                  {"Hozaifa Ali".split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-brand-green cursor-grab active:cursor-grabbing relative"
                      drag
                      dragSnapToOrigin
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      whileDrag={{ scale: 1.2, zIndex: 100, cursor: "grabbing" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
            >
              Software Engineering student at UET Lahore, specializing in full-stack development
              and Web3 technologies. I build scalable applications and innovative blockchain solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/25 active:scale-[0.98] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10"
                  transition={{ duration: 0.3 }}
                />
                View Projects
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown size={18} />
                </motion.div>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 glass-strong px-6 py-3.5 rounded-xl font-semibold text-gray-700 dark:text-white hover:border-brand-green/30 transition-all duration-300 active:scale-[0.98]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <HeroSocials />
            </motion.div>
          </motion.div>

          {/* Right side - Professional Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block"
          >
            <div className="glass-strong p-10 rounded-3xl border border-gray-200/60 dark:border-white/10 space-y-8 shadow-xl">
              <div>
                <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-3 font-medium">Education</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">UET Lahore</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

              <div>
                <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-4 font-medium">Focus Areas</h3>
                <div className="space-y-3">
                  {['Full-Stack Development', 'Web3 & Blockchain', 'Modern React Applications'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
