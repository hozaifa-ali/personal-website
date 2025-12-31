import { motion } from 'framer-motion'
import { Code, GraduationCap, CheckCircle2 } from 'lucide-react'
import SkillsMarquee from './SkillsMarquee'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { category: 'Web3', items: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'] },
  ]

  const experience = [
    {
      icon: <GraduationCap className="text-brand-green" size={22} />,
      title: 'Software Engineering',
      institution: 'UET Lahore',
      period: 'Present',
      description: 'Pursuing Bachelor\'s degree in Software Engineering with focus on software architecture, algorithms, and modern development practices.',
    },
    {
      icon: <Code className="text-brand-green" size={22} />,
      title: 'Full-Stack Developer',
      institution: 'Freelance',
      period: '2023 - Present',
      description: 'Developing scalable web applications and decentralized solutions. Specialized in React, Node.js, and blockchain technologies.',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative bg-white/10 dark:bg-gray-950/10 backdrop-blur-[2px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              About <span className="text-brand-green">Me</span>
            </h2>
            <div className="h-1 flex-1 max-w-24 bg-gradient-to-r from-brand-green to-transparent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
            I'm Hozaifa Ali, a Software Engineering student at UET Lahore with a passion for building
            innovative solutions. My expertise spans full-stack web development, with a particular
            focus on Web3 technologies and modern React applications. I enjoy solving complex problems
            and creating user-centric applications that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-24">
          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience & Education</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="card p-4 sm:p-6 border-l-4 border-brand-green"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass rounded-xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h4>
                      <p className="text-brand-green text-sm font-medium mb-2">{item.institution} • {item.period}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card p-4 sm:p-6"
                >
                  <h4 className="text-xs font-mono text-brand-green uppercase tracking-wider mb-4 font-semibold">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-brand-green/10 dark:bg-brand-green/20 border border-brand-green/20 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scrolling Skills Marquee */}
          <div className="col-span-full lg:col-span-2 -mx-4 sm:-mx-6 overflow-hidden">
            <SkillsMarquee />
          </div>
        </div>

        {/* Values / Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="card p-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code that stands the test of time' },
              { title: 'User-Centric', desc: 'Focusing on creating exceptional user experiences that solve real problems' },
              { title: 'Continuous Learning', desc: 'Staying updated with latest technologies and best practices in software development' },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-brand-green/10 rounded-lg">
                    <CheckCircle2 size={20} className="text-brand-green" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
