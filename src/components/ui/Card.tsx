import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  as?: React.ElementType
}

export function Card({ children, className, hover = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'bg-surface border border-border rounded-lg p-6',
        hover && 'transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
