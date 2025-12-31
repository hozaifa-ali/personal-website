import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { githubData } from './data/githubData'

import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Projects githubData={githubData} />
      <Contact />
    </div>
  )
}

export default App
