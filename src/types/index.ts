// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

// ─── Skills ─────────────────────────────────────────────────────────────────

export interface Skill {
  name: string
  level?: 'core' | 'proficient' | 'familiar'
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: Skill[]
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  responsibilities: string[]
  technologies: string[]
}

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string
  role: string
  technologies: string[]
  features: string[]
  responsibilities: string[]
  challenges: string[]
  solutions: string[]
  engineeringDecisions: string[]
  lessonsLearned: string[]
  featured: boolean
  order: number
}

// ─── Engineering ─────────────────────────────────────────────────────────────

export interface EngineeringPrinciple {
  id: string
  title: string
  description: string
  points: string[]
  icon: string
}

export interface CaseStudy {
  problem: string
  approach: string
  result: string
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface Stat {
  label: string
  value: string
  sublabel?: string
}

// ─── Component Props ─────────────────────────────────────────────────────────

export interface SectionProps {
  id?: string
  className?: string
}

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  size?: 'sm' | 'md'
  className?: string
  role?: string
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  isExternal?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  className?: string
  'aria-label'?: string
}

export interface HeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}
