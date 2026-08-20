import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Badge } from '@/components/ui/Badge'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { EXPERIENCE_ITEMS } from '@/data/experience'
import { SECTION_IDS } from '@/constants'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  return (
    <Section id={SECTION_IDS.experience} aria-label="Work experience">
      <Container>
        <AnimateIn>
          <Heading
            eyebrow="Experience"
            title="Work history"
            description="Professional experience building production software across SaaS domains."
            className="mb-12"
          />
        </AnimateIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <StaggerList className="flex flex-col gap-0">
            {EXPERIENCE_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background"
                    aria-hidden="true"
                  />

                  <AnimateIn>
                    <article className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-base font-semibold text-primary-text">{item.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase size={13} className="text-muted-text" aria-hidden="true" />
                            <span className="text-sm text-secondary-text">{item.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-muted-text" aria-hidden="true" />
                            <span className="font-mono text-xs text-muted-text">{item.period}</span>
                          </div>
                          <Badge variant="accent" size="sm">
                            {item.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-5" aria-label="Responsibilities">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-secondary-text">
                            <span
                              className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                              aria-hidden="true"
                            />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div>
                        <p className="text-xs text-muted-text font-mono mb-2">Technologies used</p>
                        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="default" size="sm" role="listitem">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </article>
                  </AnimateIn>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </Section>
  )
}
