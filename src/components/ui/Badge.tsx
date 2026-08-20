import { cn } from '@/utils/cn'
import type { BadgeProps } from '@/types'

export function Badge({ children, variant = 'default', size = 'sm', className, role }: BadgeProps) {
  return (
    <span
      role={role}
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-sm border',
        size === 'sm' && 'text-xs px-2 py-0.5',
        size === 'md' && 'text-sm px-2.5 py-1',
        variant === 'default' && 'bg-surface-elevated text-secondary-text border-border',
        variant === 'accent' && 'bg-accent-muted text-accent border-accent/30',
        variant === 'outline' && 'bg-transparent text-secondary-text border-border',
        className,
      )}
    >
      {children}
    </span>
  )
}
