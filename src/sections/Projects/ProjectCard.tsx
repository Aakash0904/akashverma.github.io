import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      whileHover={reduced ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={cn(
          'group flex flex-col h-full bg-surface border border-border rounded-lg p-6',
          'hover:border-accent/30 hover:shadow-card-hover transition-all duration-300',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        )}
        aria-label={`View ${project.title} project details`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
          <span
            className="text-muted-text group-hover:text-accent transition-colors duration-200 mt-0.5"
            aria-hidden="true"
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-primary-text mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-secondary-text leading-relaxed mb-5 flex-1">
          {project.shortDescription}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5" aria-label="Key features">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-secondary-text">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
          {project.features.length > 4 && (
            <li className="text-xs text-muted-text font-mono pl-3">
              +{project.features.length - 4} more
            </li>
          )}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border" role="list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="sm" role="listitem">
              {tech}
            </Badge>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
