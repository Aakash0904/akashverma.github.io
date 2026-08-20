import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '@/data/projects'
import { SECTION_IDS } from '@/constants'

const SORTED_PROJECTS = [...PROJECTS].sort((a, b) => a.order - b.order)

export function Projects() {
  return (
    <Section
      id={SECTION_IDS.projects}
      className="bg-surface/40"
      aria-label="Projects"
    >
      <Container>
        <AnimateIn>
          <Heading
            eyebrow="Projects"
            title="Selected work"
            description="Production SaaS modules and applications I've contributed to. Each card links to a detailed breakdown of the engineering work involved."
            className="mb-12"
          />
        </AnimateIn>

        <StaggerList className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SORTED_PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </Section>
  )
}
