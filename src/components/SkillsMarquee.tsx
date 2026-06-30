import LogoLoop from './LogoLoop'
import { useTheme } from '../contexts/ThemeContext'
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiGit,
  SiPython,
  SiGo,
  SiDocker,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiGraphql,
  SiNginx,
  SiLinux,
  SiRedis,
  SiGithubactions,
  SiFastapi,
  SiDjango,
  SiSolidity,
  SiExpress,
} from 'react-icons/si'

const skillLogos = [
  { node: <SiJavascript className="text-2xl" />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTypescript className="text-2xl" />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiPython className="text-2xl" />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiGo className="text-2xl" />, title: 'Go', href: 'https://go.dev' },
  { node: <SiSolidity className="text-2xl" />, title: 'Solidity', href: 'https://soliditylang.org' },
  { node: <SiReact className="text-2xl" />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs className="text-2xl" />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTailwindcss className="text-2xl" />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiFlutter className="text-2xl" />, title: 'Flutter', href: 'https://flutter.dev' },
  { node: <SiNodedotjs className="text-2xl" />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress className="text-2xl" />, title: 'Express', href: 'https://expressjs.com' },
  { node: <SiFastapi className="text-2xl" />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com' },
  { node: <SiDjango className="text-2xl" />, title: 'Django', href: 'https://www.djangoproject.com' },
  { node: <SiGraphql className="text-2xl" />, title: 'GraphQL', href: 'https://graphql.org' },
  { node: <SiPostgresql className="text-2xl" />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: <SiMongodb className="text-2xl" />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiRedis className="text-2xl" />, title: 'Redis', href: 'https://redis.io' },
  { node: <SiFirebase className="text-2xl" />, title: 'Firebase', href: 'https://firebase.google.com' },
  { node: <SiDocker className="text-2xl" />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiGithubactions className="text-2xl" />, title: 'GitHub Actions', href: 'https://github.com/features/actions' },
  { node: <SiNginx className="text-2xl" />, title: 'Nginx', href: 'https://www.nginx.com' },
  { node: <SiLinux className="text-2xl" />, title: 'Linux', href: 'https://www.kernel.org' },
  { node: <SiGit className="text-2xl" />, title: 'Git', href: 'https://git-scm.com' },
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
