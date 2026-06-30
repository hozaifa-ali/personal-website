import { ThemeProvider } from '../contexts/ThemeContext'
import SeasonalBackground from './SeasonalBackground'
import BackgroundElements from './BackgroundElements'
import CustomCursor from './CustomCursor'
import Navigation from './Navigation'
import Footer from './Footer'
import SpotifyWidget from './SpotifyWidget'
import Preloader from './Preloader'
import { ReactNode } from 'react'

interface BlogWrapperProps {
  children: ReactNode
}

export default function BlogWrapper({ children }: BlogWrapperProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent transition-colors duration-300 relative noise-bg overflow-x-hidden">
        <SeasonalBackground />
        <Preloader />
        <BackgroundElements />
        <CustomCursor />
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
        
        <Footer />
        <SpotifyWidget />
      </div>
    </ThemeProvider>
  )
}
