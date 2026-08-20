import type { NavItem, SocialLink } from '@/types'
import { SITE_CONFIG, SECTION_IDS } from '@/constants'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: `#${SECTION_IDS.home}` },
  { label: 'About', href: `#${SECTION_IDS.about}` },
  { label: 'Skills', href: `#${SECTION_IDS.skills}` },
  { label: 'Experience', href: `#${SECTION_IDS.experience}` },
  { label: 'Projects', href: `#${SECTION_IDS.projects}` },
  { label: 'Engineering', href: `#${SECTION_IDS.engineering}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: SITE_CONFIG.github, icon: 'github' },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
]
