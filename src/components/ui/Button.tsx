import { cn } from '@/utils/cn'
import type { ButtonProps } from '@/types'
import { Loader2 } from 'lucide-react'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    size === 'sm' && 'text-sm px-3 py-1.5',
    size === 'md' && 'text-sm px-4 py-2',
    size === 'lg' && 'text-base px-6 py-3',
    variant === 'primary' &&
      'bg-accent text-white hover:bg-accent-hover active:scale-[0.98] shadow-sm',
    variant === 'secondary' &&
      'bg-surface-elevated text-primary-text border border-border hover:border-accent/40 hover:bg-surface active:scale-[0.98]',
    variant === 'ghost' &&
      'bg-transparent text-secondary-text hover:text-primary-text hover:bg-surface-elevated active:scale-[0.98]',
    className,
  )

  const content = (
    <>
      {loading && <Loader2 size={14} className="animate-spin shrink-0" aria-hidden="true" />}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
