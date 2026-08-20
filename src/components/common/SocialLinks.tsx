import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { cn } from '@/utils/cn'
import { SOCIAL_LINKS } from '@/data/navigation'
import { SITE_CONFIG } from '@/constants'

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  mail: <Mail size={18} />,
}

interface SocialLinksProps {
  showResume?: boolean
  className?: string
  iconSize?: number
}

export function SocialLinks({ showResume = false, className, iconSize = 18 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={link.label}
          className={cn(
            'p-2 rounded-md text-muted-text transition-colors duration-200',
            'hover:text-primary-text hover:bg-surface-elevated',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          )}
        >
          {ICON_MAP[link.icon] ?? (
            <span style={{ width: iconSize, height: iconSize }} />
          )}
        </a>
      ))}
      {showResume && (
        <a
          href={SITE_CONFIG.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className={cn(
            'p-2 rounded-md text-muted-text transition-colors duration-200',
            'hover:text-primary-text hover:bg-surface-elevated',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          )}
        >
          <FileText size={iconSize} />
        </a>
      )}
    </div>
  )
}
