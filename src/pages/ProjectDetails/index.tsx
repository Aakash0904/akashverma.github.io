import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Heading } from '@/components/ui/Heading'
import { AnimateIn } from '@/components/common/AnimateIn'
import { StaggerList, StaggerItem } from '@/components/common/StaggerList'
import { PROJECTS } from '@/data/projects'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/motion'

function SectionBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-sm font-mono font-semibold text-accent uppercase tracking-widest mb-4">
        {title}
      </h2>
      {children}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-secondary-text">
          <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const reduced = useReducedMotion()
  const project = PROJECTS.find((p) => p.slug === slug)

  // Scroll to top whenever the project slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })
  }, [slug, reduced])

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-dvh bg-background pt-16">
      <Container className="py-12 md:py-16">
        {/* Back link — inline, not sticky */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, x: -12 }}
          animate={reduced ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-text hover:text-primary-text transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm group"
          >
            <ArrowLeft
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={reduced ? {} : fadeInUp.hidden}
          animate={reduced ? {} : fadeInUp.visible}
          className="mb-10 max-w-3xl"
        >
          {/* Category + title row */}
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="accent" size="md">
              {project.category}
            </Badge>
          </div>

          <h1 className="text-section font-semibold text-primary-text mb-5 leading-tight">
            {project.title}
          </h1>

          <p className="text-base text-secondary-text leading-relaxed">{project.description}</p>

          {/* Meta row */}
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-xs text-muted-text font-mono mb-0.5">Role</p>
              <p className="text-sm text-primary-text font-medium">{project.role}</p>
            </div>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <div>
              <p className="text-xs text-muted-text font-mono mb-0.5">Category</p>
              <p className="text-sm text-primary-text font-medium">{project.category}</p>
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <AnimateIn className="mb-12">
          <div className="bg-surface border border-border rounded-lg p-5">
            <p className="text-xs text-muted-text font-mono mb-3">Technology stack</p>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="md" role="listitem">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <AnimateIn>
              <SectionBlock title="Features">
                <BulletList items={project.features} />
              </SectionBlock>
            </AnimateIn>

            <AnimateIn>
              <SectionBlock title="Responsibilities">
                <BulletList items={project.responsibilities} />
              </SectionBlock>
            </AnimateIn>

            <AnimateIn>
              <SectionBlock title="Engineering Decisions">
                <div className="space-y-3">
                  {project.engineeringDecisions.map((decision, i) => {
                    const [title, ...rest] = decision.split(':')
                    return (
                      <Card key={i} className="p-4">
                        <p className="text-sm font-semibold text-primary-text mb-1">{title}</p>
                        {rest.length > 0 && (
                          <p className="text-sm text-secondary-text">{rest.join(':').trim()}</p>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </SectionBlock>
            </AnimateIn>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <SectionBlock title="Challenges">
                <BulletList items={project.challenges} />
              </SectionBlock>
            </AnimateIn>

            <AnimateIn>
              <SectionBlock title="Solutions">
                <BulletList items={project.solutions} />
              </SectionBlock>
            </AnimateIn>

            <AnimateIn>
              <SectionBlock title="Lessons Learned">
                <BulletList items={project.lessonsLearned} />
              </SectionBlock>
            </AnimateIn>
          </div>
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <Heading eyebrow="More Work" title="Other projects" className="mb-8" />
            <StaggerList key={slug} className="grid md:grid-cols-2 gap-5">
              {otherProjects.map((other) => (
                <StaggerItem key={other.slug}>
                  <Link
                    to={`/projects/${other.slug}`}
                    className="group flex flex-col gap-3 p-5 bg-surface border border-border rounded-lg hover:border-accent/30 hover:shadow-card-hover transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <div className="flex items-center justify-between">
                      <Badge variant="accent" size="sm">
                        {other.category}
                      </Badge>
                      <ArrowUpRight
                        size={14}
                        className="text-muted-text group-hover:text-accent transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-primary-text group-hover:text-accent transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <p className="text-xs text-secondary-text leading-relaxed line-clamp-2">
                      {other.shortDescription}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        )}
      </Container>
    </div>
  )
}
