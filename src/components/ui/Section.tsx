import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

export function Section({ id, children, className, 'aria-label': ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('section-padding', className)}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}
