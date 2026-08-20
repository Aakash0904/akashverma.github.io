import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { AnimateIn } from '@/components/common/AnimateIn'
import { ContactForm } from './ContactForm'
import { SITE_CONFIG, SECTION_IDS } from '@/constants'
import { cn } from '@/utils/cn'

const CONTACT_CHANNELS = [
  {
    label: 'GitHub',
    value: 'github.com/aakashverma',
    href: SITE_CONFIG.github,
    icon: <Github size={18} />,
    description: 'Explore my code and repositories',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/verma-akash-9151511a4',
    href: SITE_CONFIG.linkedin,
    icon: <Linkedin size={18} />,
    description: 'Connect professionally',
  },
  {
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: <Mail size={18} />,
    description: 'Direct email for project inquiries',
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: SITE_CONFIG.resumeUrl,
    icon: <FileText size={18} />,
    description: 'Full work history and skills',
  },
]

export function Contact() {
  return (
    <Section
      id={SECTION_IDS.contact}
      className="bg-surface/40"
      aria-label="Contact"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <AnimateIn>
            <Heading
              eyebrow="Contact"
              title="Let's build something useful."
              description="Open to full-time roles, contract work, and project collaborations. If you have a problem worth solving, I'm happy to talk about it."
              className="mb-8"
            />

            {/* Contact channels */}
            <nav aria-label="Contact channels" className="flex flex-col gap-3">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={cn(
                    'flex items-center gap-4 p-4 rounded-lg bg-surface border border-border',
                    'hover:border-accent/30 hover:shadow-card-hover transition-all duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    'group',
                  )}
                >
                  <span className="p-2 rounded-md bg-surface-elevated text-secondary-text group-hover:text-accent transition-colors duration-200">
                    {channel.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-primary-text">{channel.label}</div>
                    <div className="text-xs text-muted-text mt-0.5 truncate">{channel.value}</div>
                  </div>
                  <span className="text-xs text-muted-text hidden sm:block shrink-0 text-right max-w-[120px]">
                    {channel.description}
                  </span>
                </a>
              ))}
            </nav>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={0.15}>
            <ContactForm />
          </AnimateIn>
        </div>
      </Container>
    </Section>
  )
}
