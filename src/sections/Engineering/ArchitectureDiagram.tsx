import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LAYERS = [
  { label: 'Route', sublabel: 'URL → Controller mapping', color: 'border-purple-500/40 bg-purple-500/5 text-purple-300' },
  { label: 'Middleware', sublabel: 'Auth · Rate limiting · CORS', color: 'border-blue-500/40 bg-blue-500/5 text-blue-300' },
  { label: 'Form Request', sublabel: 'Validation · Authorization', color: 'border-cyan-500/40 bg-cyan-500/5 text-cyan-300' },
  { label: 'Controller', sublabel: 'Thin — delegates to service', color: 'border-green-500/40 bg-green-500/5 text-green-300' },
  { label: 'Service', sublabel: 'Business logic lives here', color: 'border-yellow-500/40 bg-yellow-500/5 text-yellow-300' },
  { label: 'Repository', sublabel: 'Data access abstraction', color: 'border-orange-500/40 bg-orange-500/5 text-orange-300' },
  { label: 'Model', sublabel: 'Eloquent · Relationships', color: 'border-red-500/40 bg-red-500/5 text-red-300' },
  { label: 'Database', sublabel: 'MySQL · Indexed · Optimized', color: 'border-pink-500/40 bg-pink-500/5 text-pink-300' },
]

export function ArchitectureDiagram() {
  const reduced = useReducedMotion()

  return (
    <div
      className="flex flex-col items-center gap-0"
      role="img"
      aria-label="Laravel service layer architecture: Route, Middleware, Form Request, Controller, Service, Repository, Model, Database"
    >
      {LAYERS.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={reduced ? {} : { opacity: 0, x: -12 }}
          whileInView={reduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.35 }}
          className="w-full"
        >
          <div
            className={`flex items-center justify-between px-4 py-2.5 border rounded-md ${layer.color}`}
          >
            <span className="font-mono text-sm font-semibold">{layer.label}</span>
            <span className="text-xs opacity-70 hidden sm:block">{layer.sublabel}</span>
          </div>
          {i < LAYERS.length - 1 && (
            <div className="flex justify-center py-0.5" aria-hidden="true">
              <div className="w-px h-4 bg-border" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
