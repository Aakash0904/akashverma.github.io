import { ArrowLeft, FileQuestion } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/motion'

export function NotFound() {
  const reduced = useReducedMotion()

  return (
    <div className="min-h-dvh flex items-center justify-center bg-background">
      <Container>
        <motion.div
          initial={reduced ? {} : fadeInUp.hidden}
          animate={reduced ? {} : fadeInUp.visible}
          className="flex flex-col items-center text-center max-w-md mx-auto py-20"
        >
          <div className="p-4 rounded-full bg-surface border border-border mb-6">
            <FileQuestion size={32} className="text-muted-text" aria-hidden="true" />
          </div>

          <p className="font-mono text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            404
          </p>
          <h1 className="text-2xl font-semibold text-primary-text mb-3">Page not found</h1>
          <p className="text-sm text-secondary-text leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary" href="/">
              <ArrowLeft size={14} aria-hidden="true" />
              Back to home
            </Button>
            <Button variant="secondary" href="/#projects">
              View projects
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
