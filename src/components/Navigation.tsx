import { useState, useEffect } from 'react'
import { Sun, Moon, Home, Briefcase, Mail, User } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <>
      {/* ==========================================
          DESKTOP NAVIGATION (Medium screens and up)
         ========================================== */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="hidden md:fixed md:top-6 md:left-0 md:right-0 md:flex md:justify-center md:z-[100] pointer-events-none"
      >
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-full border px-6 py-3 flex items-center gap-8 ${isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-lg'
            : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-transparent shadow-sm'
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-lg font-bold bg-gradient-to-r from-brand-green to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            HOZAIFA ALI
          </motion.a>

          {/* Links */}
          <ul className="flex items-center gap-1" onMouseLeave={() => setHoveredIndex(null)}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                <a
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors relative z-10 ${hoveredIndex === index
                    ? 'text-brand-green dark:text-brand-green'
                    : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {item.name}
                </a>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-brand-green/10 dark:bg-brand-green/20 rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
        </nav>
      </motion.header>


      {/* ==========================================
          MOBILE NAVIGATION (Small screens only)
         ========================================== */}

      {/* 1. Mobile Top Bar (Logo + Theme) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800`}
      >
        <a href="#home" className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
          HOZAIFA ALI
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </motion.div>

      {/* 2. Mobile Bottom Bar - Compact Rounded Pill Design */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="md:hidden fixed bottom-1 left-0 right-0 z-50 px-3 pb-3"
      >
        <div className="relative bg-gradient-to-br from-white/80 via-white/70 to-white/60 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/60 backdrop-blur-3xl border-2 border-white/40 dark:border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-4 py-2.5">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

          <ul className="flex justify-around items-center relative z-10">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex flex-col items-center gap-0.5 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 px-2.5 py-1.5 rounded-full hover:bg-emerald-500/10 active:scale-90 transform relative"
                  >
                    {/* Icon glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/5 blur-xl transition-all duration-300" />
                    <Icon size={20} strokeWidth={2} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-[9px] font-semibold tracking-wider relative z-10">{item.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </motion.nav>

      {/* Spacers to prevent content overlap */}
      <div className="md:hidden h-16" /> {/* Spacer for bottom nav */}
    </>
  )
}

export default Navigation
