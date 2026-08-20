import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { SkillCategory } from '@/types'

const LEVEL_COLORS: Record<string, string> = {
  core: 'bg-accent/20 text-accent border-accent/30',
  proficient: 'bg-surface-elevated text-secondary-text border-border',
  familiar: 'bg-surface text-muted-text border-border/50',
}

const LEVEL_DOTS: Record<string, string> = {
  core: 'bg-accent',
  proficient: 'bg-blue-400',
  familiar: 'bg-muted-text',
}

interface SkillCategoryCardProps {
  category: SkillCategory
  isActive: boolean
  onClick: () => void
}

export function SkillCategoryCard({ category, isActive, onClick }: SkillCategoryCardProps) {
  const reduced = useReducedMotion()

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 rounded-lg border transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        isActive
          ? 'bg-surface border-accent/40 shadow-card-hover'
          : 'bg-surface border-border hover:border-accent/20',
      )}
      aria-pressed={isActive}
      aria-label={`${category.title} skills category`}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'text-sm font-semibold transition-colors duration-200',
            isActive ? 'text-primary-text' : 'text-secondary-text',
          )}
        >
          {category.title}
        </span>
        <span className="text-xs text-muted-text font-mono">{category.skills.length}</span>
      </div>
      <p className="text-xs text-muted-text mt-1 leading-relaxed">{category.description}</p>

      {/* Skill pills preview */}
      {isActive && (
        <motion.div
          initial={reduced ? {} : { opacity: 0, height: 0 }}
          animate={reduced ? {} : { opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {category.skills.map((skill) => {
            const level = skill.level ?? 'proficient'
            return (
              <span
                key={skill.name}
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded border font-mono',
                  LEVEL_COLORS[level],
                )}
              >
                <span
                  className={cn('w-1 h-1 rounded-full shrink-0', LEVEL_DOTS[level])}
                  aria-hidden="true"
                />
                {skill.name}
              </span>
            )
          })}
        </motion.div>
      )}
    </button>
  )
}
