import { Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/utils/cn'
import { SITE_CONFIG } from '@/constants'

const FOOTER_LINKS = [
  { label: 'GitHub', href: SITE_CONFIG.github, icon: <Github size={16} /> },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: <Linkedin size={16} /> },
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: <Mail size={16} /> },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-surface"
    >
      <div className="container-width py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-sm font-semibold text-primary-text">
              {SITE_CONFIG.name}
            </span>
            <span className="text-xs text-muted-text">{SITE_CONFIG.title}</span>
            <span className="font-mono text-xs text-muted-text">{SITE_CONFIG.tagline}</span>
          </div>

          {/* Social links */}
          <nav aria-label="Social links" className="flex items-center gap-2">
            {FOOTER_LINKS.map((link) => (
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
                {link.icon}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-text">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
