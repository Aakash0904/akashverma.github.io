import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { NAV_ITEMS } from '@/data/navigation'
import { SITE_CONFIG, SECTION_IDS } from '@/constants'
import { navMenuVariants } from '@/lib/motion'

const SECTION_IDS_ARRAY = Object.values(SECTION_IDS)

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(20)
  const activeSection = useActiveSection(SECTION_IDS_ARRAY)
  const reduced = useReducedMotion()

  const handleNavClick = useCallback(
    (href: string) => {
      const id = href.replace('#', '')
      // Close the menu first, then scroll after the close animation finishes
      // so the layout shift from the menu doesn't interfere with scroll position
      setMobileOpen(false)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
        }
      }, 300)
    },
    [reduced],
  )

  const isActive = (href: string) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="container-width flex items-center justify-between h-16"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
          aria-label="Go to top"
        >
          <span className="font-mono text-sm font-semibold text-primary-text group-hover:text-accent transition-colors duration-200">
            AV
          </span>
          <span className="hidden sm:block text-sm font-medium text-secondary-text group-hover:text-primary-text transition-colors duration-200">
            Akash Verma
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                isActive(item.href)
                  ? 'text-primary-text bg-surface-elevated'
                  : 'text-secondary-text hover:text-primary-text hover:bg-surface-elevated',
              )}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium',
              'text-secondary-text border border-border bg-surface-elevated',
              'hover:text-primary-text hover:border-accent/40 transition-all duration-200',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            )}
          >
            <FileText size={14} aria-hidden="true" />
            Resume
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className={cn(
              'px-3 py-1.5 rounded-md text-sm font-medium',
              'bg-accent text-white hover:bg-accent-hover transition-all duration-200',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            )}
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            'md:hidden p-2 rounded-md text-secondary-text',
            'hover:text-primary-text hover:bg-surface-elevated transition-colors duration-200',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          )}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={reduced ? {} : navMenuVariants}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container-width py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    isActive(item.href)
                      ? 'text-primary-text bg-surface-elevated'
                      : 'text-secondary-text hover:text-primary-text hover:bg-surface-elevated',
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex gap-2">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium',
                    'text-secondary-text border border-border bg-surface-elevated',
                    'hover:text-primary-text hover:border-accent/40 transition-all duration-200',
                  )}
                >
                  <FileText size={14} aria-hidden="true" />
                  Resume
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className={cn(
                    'flex-1 px-3 py-2 rounded-md text-sm font-medium',
                    'bg-accent text-white hover:bg-accent-hover transition-all duration-200',
                  )}
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
