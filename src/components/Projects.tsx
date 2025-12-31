import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, ArrowRight } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

interface Repository {
  name: string
  full_name: string
  description: string | null
  language: string | null
  homepage: string | null
  html_url: string
  stars: number
  forks: number
  pushed_at: string
  visibility: string
}

interface ProjectsProps {
  githubData: {
    repositories: Repository[]
  }
}

const Projects = ({ githubData }: ProjectsProps) => {
  const featuredProjects = [
    ...githubData.repositories
      .filter((repo) => repo.visibility === 'public' && repo.description)
      .slice(0, 3),
    {
      name: 'Enterprise Dashboard Platform',
      full_name: 'hozi8-web3/enterprise-dashboard',
      description: 'A comprehensive enterprise dashboard with real-time analytics, user management, and advanced reporting features. Built with React, TypeScript, and microservices architecture.',
      language: 'TypeScript',
      homepage: 'https://enterprise-dashboard-demo.vercel.app',
      html_url: 'https://github.com/hozi8-web3/enterprise-dashboard',
      stars: 12,
      forks: 3,
      pushed_at: new Date().toISOString(),
      visibility: 'public',
    },
    {
      name: 'AI-Powered Code Review System',
      full_name: 'hozi8-web3/ai-code-review',
      description: 'An intelligent code review platform that uses machine learning to analyze code quality, suggest improvements, and detect potential bugs. Integrates with GitHub and GitLab.',
      language: 'Python',
      homepage: 'https://ai-code-review.vercel.app',
      html_url: 'https://github.com/hozi8-web3/ai-code-review',
      stars: 28,
      forks: 7,
      pushed_at: new Date().toISOString(),
      visibility: 'public',
    },
  ]

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      Python: '#3776ab',
      HTML: '#e34c26',
      CSS: '#1572b6',
      Solidity: '#363636',
    }
    return colors[language || ''] || '#10b981'
  }

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Featured <span className="text-brand-green">Projects</span>
            </h2>
            <div className="h-1 flex-1 max-w-24 bg-gradient-to-r from-brand-green to-transparent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl">
            A selection of projects showcasing my expertise in full-stack development, Web3 technologies, and modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {featuredProjects.map((project, index) => {
            // First project is featured (larger in Bento grid)
            const isFeatured = index === 0

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`group ${isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}`}
                whileHover={{ y: -4 }}
              >
                <SpotlightCard className="h-full hover:border-brand-green/30 transition-colors duration-500">
                  <div className={`p-6 sm:p-8 flex flex-col h-full ${isFeatured ? 'justify-between' : ''}`}>

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0 pr-4">
                        <motion.h3
                          className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'} font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors`}
                        >
                          {project.name}
                        </motion.h3>

                        {project.language && (
                          <div className="flex items-center gap-2 mb-4">
                            <div
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                              style={{ backgroundColor: getLanguageColor(project.language) }}
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">{project.language}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.html_url && (
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-gray-500 hover:text-brand-green hover:bg-brand-green/10 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github size={isFeatured ? 24 : 20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-6 ${isFeatured ? 'text-lg md:text-xl line-clamp-4' : 'text-sm line-clamp-3'}`}>
                      {project.description || 'A professional project showcasing modern development practices.'}
                    </p>

                    <div className={`mt-auto pt-6 border-t border-gray-100 dark:border-gray-800/50 flex items-center justify-between ${isFeatured ? 'flex-row' : 'flex-col sm:flex-row gap-4 sm:gap-0'}`}>
                      <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Star size={16} className={`${isFeatured ? 'text-yellow-400' : ''}`} />
                          <span className="font-medium">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GitFork size={16} />
                          <span className="font-medium">{project.forks}</span>
                        </div>
                      </div>

                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-brand-green font-semibold group/link ${isFeatured ? 'text-base' : 'text-sm'}`}
                        >
                          Live Demo
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/hozi8-web3"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-semibold transition-colors"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
