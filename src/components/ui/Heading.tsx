import { cn } from '@/utils/cn'
import type { HeadingProps } from '@/types'

export function Heading({ eyebrow, title, description, align = 'left', className }: HeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="font-mono text-xs font-semibold tracking-widest text-accent uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-section font-semibold text-primary-text leading-tight">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base text-secondary-text leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
