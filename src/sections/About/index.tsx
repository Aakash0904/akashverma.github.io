import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { SECTION_IDS } from '@/constants'
import type { Stat } from '@/types'
import { slideInLeft, fadeInUp } from '@/lib/motion'

const STATS: Stat[] = [
  { value: '2+', label: 'Years', sublabel: 'Professional Experience' },
  { value: 'Full Stack', label: 'Laravel + React', sublabel: 'Core Stack' },
  { value: 'SaaS', label: 'Production', sublabel: 'Applications' },
  { value: 'Clean', label: 'Architecture', sublabel: 'Engineering Focus' },
]

const FOCUS_AREAS = [
  'Laravel API development and service-oriented architecture',
  'React frontend development with well-structured component design',
  'Database optimization — query performance, indexing, and data modeling',
  'Scalable SaaS module development across HRMS, CRM, and ERP domains',
  'Code quality through refactoring, PHPStan/Larastan, and consistent standards',
  'Production reliability — error handling, logging, and deployment support',
]

export function About() {
  return (
    <Section id={SECTION_IDS.about} aria-label="About me">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <AnimateIn variants={slideInLeft}>
            <Heading
              eyebrow="About"
              title="Backend-focused Full Stack Developer"
              className="mb-6"
            />
            <div className="space-y-4 text-secondary-text leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with hands-on experience building production SaaS
                applications using Laravel and React. My work spans the full stack — from designing
                MySQL schemas and writing API business logic to building React interfaces that
                consume them.
              </p>
              <p>
                Most of my experience has been in real-world product development: HRMS platforms,
                performance management systems, lead management and CRM modules. I&apos;ve worked
                across the entire feature lifecycle — from initial implementation to optimization,
                refactoring, and production support.
              </p>
              <p>
                I care about writing maintainable code: clean service layers, consistent API
                contracts, well-structured database queries, and code that&apos;s easy to read and
                change six months later.
              </p>
            </div>

            {/* Focus list */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-primary-text mb-4">Engineering focus</h3>
              <ul className="space-y-2" aria-label="Engineering focus areas">
                {FOCUS_AREAS.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-sm text-secondary-text">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Right: Stats */}
          <div>
            <StaggerList className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <AnimateIn variants={fadeInUp}>
                    <div className="bg-surface border border-border rounded-lg p-5 hover:border-accent/30 transition-colors duration-300">
                      <div className="font-mono text-2xl font-semibold text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-primary-text">{stat.label}</div>
                      {stat.sublabel && (
                        <div className="text-xs text-muted-text mt-0.5">{stat.sublabel}</div>
                      )}
                    </div>
                  </AnimateIn>
                </StaggerItem>
              ))}
            </StaggerList>

            {/* Stack summary card */}
            <AnimateIn className="mt-4">
              <div className="bg-surface border border-border rounded-lg p-5">
                <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                  Core Stack
                </h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    { layer: 'Backend', tech: 'Laravel · PHP' },
                    { layer: 'Frontend', tech: 'React · TypeScript' },
                    { layer: 'Database', tech: 'MySQL' },
                    { layer: 'APIs', tech: 'REST · JSON' },
                    { layer: 'Cloud', tech: 'AWS S3 · CloudFront' },
                    { layer: 'DevOps', tech: 'Git · Linux · Apache' },
                  ].map(({ layer, tech }) => (
                    <div key={layer}>
                      <div className="text-xs text-muted-text font-mono">{layer}</div>
                      <div className="text-sm text-primary-text font-medium mt-0.5">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </Section>
  )
}
