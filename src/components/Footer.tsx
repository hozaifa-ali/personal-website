import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const endText = "END"

  return (
    <footer className="relative bg-gradient-to-t from-gray-950 to-black dark:from-black dark:to-gray-900 overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* END Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center gap-3 sm:gap-4 md:gap-6 group cursor-pointer"
          >
            {endText.split('').map((letter, index) => (
              <motion.div
                key={index}
                variants={letterVariants}
                className="relative"
                whileHover={{ scale: 1.15, y: -12, rotateZ: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-brand-green/30 rounded-lg blur-xl -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1.4 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-lg group-hover:drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all">
                  {letter}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider with animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-xs mx-auto group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent group-hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]"
              whileHover={{ height: 3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Message with heart animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-300 group hover:text-brand-green transition-colors cursor-pointer"
          >
            <span className="text-sm sm:text-base md:text-lg group-hover:scale-105 transition-transform">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              whileHover={{ rotate: 360, scale: 1.3 }}
            >
              <Heart className="text-brand-green fill-brand-green group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" size={24} />
            </motion.div>
            <span className="text-sm sm:text-base md:text-lg group-hover:scale-105 transition-transform">by Hozaifa Ali</span>
          </motion.div>

          {/* Year */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-xs sm:text-sm md:text-base font-mono tracking-wider"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center gap-2 text-brand-green text-2xl group cursor-pointer"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                whileHover={{ scale: 1.3, rotate: 180 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-brand-green/20 rounded-full blur-md -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                ✦
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center text-gray-400">
          <p className="text-xs font-mono tracking-widest">~ END ~</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
