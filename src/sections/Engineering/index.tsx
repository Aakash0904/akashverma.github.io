import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { ArchitectureDiagram } from './ArchitectureDiagram'
import { SECTION_IDS } from '@/constants'

const ENGINEERING_CARDS = [
  {
    id: 'performance',
    title: 'Performance',
    description: 'Writing queries that stay fast as data grows',
    points: [
      'Eager loading to eliminate N+1 query patterns',
      'Selective column retrieval — no SELECT *',
      'Composite indexes on frequently filtered columns',
      'Server-side pagination on all list endpoints',
      'Scoped query builders for clean, reusable filters',
    ],
    accent: 'text-blue-400',
    border: 'hover:border-blue-400/30',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'Building systems that behave predictably in production',
    points: [
      'Validated input at the Form Request layer',
      'Consistent JSON response envelope across all endpoints',
      'Queue jobs for heavy or failure-prone operations',
      'Structured error handling with appropriate HTTP codes',
      'Activity logging for audit-sensitive operations',
    ],
    accent: 'text-green-400',
    border: 'hover:border-green-400/30',
  },
  {
    id: 'quality',
    title: 'Code Quality',
    description: 'Code that is readable, typed, and easy to change',
    points: [
      'PHPStan / Larastan for static analysis',
      'Strict typing — no ambiguous returns or parameters',
      'Refactoring toward smaller, focused service methods',
      'Consistent naming — no mystery variables or magic strings',
      'Reusable services rather than duplicated logic',
    ],
    accent: 'text-orange-400',
    border: 'hover:border-orange-400/30',
  },
]

export function Engineering() {
  return (
    <Section id={SECTION_IDS.engineering} aria-label="Engineering approach">
      <Container>
        <AnimateIn>
          <Heading
            eyebrow="Engineering Approach"
            title="How I build reliable systems"
            description="A practical approach focused on maintainability, performance, and production reliability."
            className="mb-12"
          />
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Architecture diagram */}
          <AnimateIn>
            <Card className="h-full">
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-primary-text">Clean Architecture</h3>
                <p className="text-xs text-muted-text mt-1">
                  Structured Laravel request lifecycle — each layer has a single responsibility
                </p>
              </div>
              <ArchitectureDiagram />
            </Card>
          </AnimateIn>

          {/* Engineering cards */}
          <StaggerList className="flex flex-col gap-4">
            {ENGINEERING_CARDS.map((card) => (
              <StaggerItem key={card.id}>
                <Card
                  hover
                  className={`transition-all duration-300 ${card.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className={`text-sm font-semibold ${card.accent} mb-0.5`}>
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-text mb-3">{card.description}</p>
                      <ul className="space-y-1.5" aria-label={`${card.title} practices`}>
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-xs text-secondary-text"
                          >
                            <span
                              className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${card.accent.replace('text-', 'bg-')}`}
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>

        {/* Engineering Case Study */}
        <AnimateIn>
          <div className="bg-surface border border-border rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest">
                Case Study
              </span>
              <span className="text-xs text-muted-text">Engineering thinking in practice</span>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                {
                  label: 'Problem',
                  color: 'text-red-400',
                  content:
                    'Large employee/appraisal retrieval logic contained multiple conditions, unnecessary branches, and mixed retrieval with business-rule checks in the same method.',
                },
                {
                  label: 'Approach',
                  color: 'text-yellow-400',
                  content:
                    'Separated appraisal-specific retrieval into its own scoped query. Reduced unnecessary column selection. Moved business-rule status validation into a dedicated service method.',
                },
                {
                  label: 'Result',
                  color: 'text-green-400',
                  content:
                    'Cleaner, more readable implementation. Each method has a single responsibility. Easier to extend when requirements change. More focused API response payload.',
                },
              ].map(({ label, color, content }) => (
                <div key={label} className="p-6">
                  <p className={`font-mono text-xs font-semibold ${color} uppercase tracking-widest mb-3`}>
                    {label}
                  </p>
                  <p className="text-sm text-secondary-text leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  )
}
