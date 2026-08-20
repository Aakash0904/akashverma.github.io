import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { SkillCategoryCard } from './SkillCategoryCard'
import { SKILL_CATEGORIES } from '@/data/skills'
import { SECTION_IDS } from '@/constants'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0]?.id ?? '')

  return (
    <Section
      id={SECTION_IDS.skills}
      className="bg-surface/40"
      aria-label="Skills and technologies"
    >
      <Container>
        <AnimateIn>
          <Heading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A categorized overview of the languages, frameworks, and tools I use in production development."
            className="mb-12"
          />
        </AnimateIn>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Category list */}
          <StaggerList className="flex flex-col gap-3 lg:col-span-1">
            {SKILL_CATEGORIES.map((category) => (
              <StaggerItem key={category.id}>
                <SkillCategoryCard
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              </StaggerItem>
            ))}
          </StaggerList>

          {/* Detail panel — desktop */}
          <AnimateIn className="hidden lg:block lg:col-span-2">
            {SKILL_CATEGORIES.map((category) => {
              if (category.id !== activeCategory) return null
              return (
                <div
                  key={category.id}
                  className="bg-surface border border-border rounded-lg p-6 h-full"
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary-text">{category.title}</h3>
                    <p className="text-sm text-secondary-text mt-1">{category.description}</p>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-border">
                    {[
                      { label: 'Core', dot: 'bg-accent', text: 'text-accent' },
                      { label: 'Proficient', dot: 'bg-blue-400', text: 'text-blue-400' },
                      { label: 'Familiar', dot: 'bg-muted-text', text: 'text-muted-text' },
                    ].map(({ label, dot }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
                        <span className="text-xs text-muted-text">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const level = skill.level ?? 'proficient'
                      const colorMap: Record<string, string> = {
                        core: 'border-accent/30 bg-accent/10 text-accent',
                        proficient: 'border-blue-400/20 bg-blue-400/5 text-blue-300',
                        familiar: 'border-border bg-surface-elevated text-secondary-text',
                      }
                      const dotMap: Record<string, string> = {
                        core: 'bg-accent',
                        proficient: 'bg-blue-400',
                        familiar: 'bg-muted-text',
                      }
                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border font-mono ${colorMap[level]}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotMap[level]}`}
                            aria-hidden="true"
                          />
                          {skill.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </AnimateIn>
        </div>
      </Container>
    </Section>
  )
}
