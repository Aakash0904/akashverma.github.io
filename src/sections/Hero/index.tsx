import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/common/SocialLinks'
import { TerminalCard } from './TerminalCard'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SITE_CONFIG, SECTION_IDS } from '@/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'

const TECH_BADGES = ['Laravel', 'PHP', 'React', 'MySQL', 'AWS', 'REST APIs']

export function Hero() {
  const reduced = useReducedMotion()

  const scrollToProjects = () => {
    const el = document.getElementById(SECTION_IDS.projects)
    el?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.getElementById(SECTION_IDS.contact)
    el?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
  }

  return (
    <section
      id={SECTION_IDS.home}
      aria-label="Introduction"
      className="relative min-h-dvh flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial gradient fade */}
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduced ? {} : staggerContainer}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.p
              variants={reduced ? {} : staggerItem}
              className="font-mono text-xs font-semibold tracking-widest text-accent uppercase"
            >
              Full Stack Developer
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={reduced ? {} : staggerItem}
              className="text-hero font-semibold text-primary-text leading-none"
            >
              {SITE_CONFIG.name}
            </motion.h1>

            {/* Stack line */}
            <motion.p
              variants={reduced ? {} : staggerItem}
              className="font-mono text-sm text-secondary-text"
            >
              Laravel · PHP · React
            </motion.p>

            {/* Description */}
            <motion.p
              variants={reduced ? {} : staggerItem}
              className="text-lg text-secondary-text leading-relaxed max-w-lg"
            >
              {SITE_CONFIG.description}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={reduced ? {} : staggerItem}
              className="flex flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {TECH_BADGES.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={reduced ? {} : staggerItem}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button variant="primary" size="lg" onClick={scrollToProjects}>
                View Projects
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToContact}>
                Contact Me
              </Button>
            </motion.div>

            {/* Social */}
            <motion.div variants={reduced ? {} : staggerItem}>
              <SocialLinks showResume className="mt-2" />
            </motion.div>
          </motion.div>

          {/* Right: Terminal card */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 32 }}
            animate={reduced ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? {} : fadeInUp.hidden}
          animate={reduced ? {} : fadeInUp.visible}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-muted-text font-mono">scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-muted-text" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Hire me badge — subtle corner detail */}
      <a
        href={`mailto:${SITE_CONFIG.email}`}
        className="absolute top-24 right-4 hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent hover:bg-accent/20 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Open to work — contact me"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
        Open to work
        <ExternalLink size={10} aria-hidden="true" />
      </a>
    </section>
  )
}
