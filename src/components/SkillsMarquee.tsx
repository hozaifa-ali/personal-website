import LogoLoop from './LogoLoop'
import { useTheme } from '../contexts/ThemeContext'
import {
  SiAstro,
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiSupabase,
  SiMysql,
  SiGnubash
} from 'react-icons/si'

const skillLogos = [
  { node: <SiAstro className="text-2xl" />, title: 'Astro', href: 'https://astro.build' },
  { node: <SiVuedotjs className="text-2xl" />, title: 'Vue', href: 'https://vuejs.org' },
  { node: <SiReact className="text-2xl" />, title: 'React', href: 'https://react.dev' },
  { node: <SiTypescript className="text-2xl" />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss className="text-2xl" />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiNextdotjs className="text-2xl" />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiNodedotjs className="text-2xl" />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiHtml5 className="text-2xl" />, title: 'HTML5', href: 'https://html.spec.whatwg.org' },
  { node: <SiCss3 className="text-2xl" />, title: 'CSS3', href: 'https://www.w3.org/Style/CSS' },
  { node: <SiJavascript className="text-2xl" />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiGit className="text-2xl" />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiSupabase className="text-2xl" />, title: 'Supabase', href: 'https://supabase.com' },
  { node: <SiMysql className="text-2xl" />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiGnubash className="text-2xl" />, title: 'Bash', href: 'https://www.gnu.org/software/bash' },
]

const SkillsMarquee = () => {
  const { theme } = useTheme()

  const fadeColor = theme === 'dark' ? '#030712' : '#ffffff'

  return (
    <div className="py-6">
      <LogoLoop
        logos={skillLogos}
        speed={50}
        direction="left"
        logoHeight={40}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={fadeColor}
        ariaLabel="Technology skills"
      />
    </div>
  )
}

export default SkillsMarquee
