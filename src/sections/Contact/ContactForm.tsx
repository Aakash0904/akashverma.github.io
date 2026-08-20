import { useState, useId } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import type { ContactFormData, FormStatus } from '@/types'

interface FieldError {
  name?: string
  email?: string
  message?: string
}

function validateForm(data: ContactFormData): FieldError {
  const errors: FieldError = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

export function ContactForm() {
  const id = useId()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldError>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const nameId = `${id}-name`
  const emailId = `${id}-email`
  const messageId = `${id}-message`

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const newErrors = validateForm({ ...formData, [field]: value })
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }))
    }
  }

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const newErrors = validateForm(formData)
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!FORMSPREE_ID) {
      // Dev fallback — show success without sending
      setStatus('loading')
      await new Promise<void>((r) => setTimeout(r, 800))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      return
    }

    setStatus('loading')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTouched({})
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-12 px-6 bg-surface border border-border rounded-lg"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={40} className="text-green-400 mb-4" aria-hidden="true" />
        <h3 className="text-base font-semibold text-primary-text mb-2">Message sent</h3>
        <p className="text-sm text-secondary-text max-w-xs">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-accent hover:text-accent-hover underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-5"
    >
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-sm text-red-400"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
          <span>Something went wrong. Please try again or email me directly.</span>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={nameId} className="text-sm font-medium text-primary-text">
          Name <span className="text-red-400" aria-label="required">*</span>
        </label>
        <input
          id={nameId}
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          placeholder="Your name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={cn(
            'w-full px-3 py-2.5 rounded-md bg-surface-elevated border text-sm text-primary-text',
            'placeholder:text-muted-text transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent/50',
            errors.name ? 'border-red-500/50' : 'border-border hover:border-accent/30',
          )}
        />
        {errors.name && (
          <p id={`${nameId}-error`} role="alert" className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={emailId} className="text-sm font-medium text-primary-text">
          Email <span className="text-red-400" aria-label="required">*</span>
        </label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder="your@email.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className={cn(
            'w-full px-3 py-2.5 rounded-md bg-surface-elevated border text-sm text-primary-text',
            'placeholder:text-muted-text transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent/50',
            errors.email ? 'border-red-500/50' : 'border-border hover:border-accent/30',
          )}
        />
        {errors.email && (
          <p id={`${emailId}-error`} role="alert" className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={messageId} className="text-sm font-medium text-primary-text">
          Message <span className="text-red-400" aria-label="required">*</span>
        </label>
        <textarea
          id={messageId}
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder="What would you like to discuss?"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className={cn(
            'w-full px-3 py-2.5 rounded-md bg-surface-elevated border text-sm text-primary-text',
            'placeholder:text-muted-text transition-colors duration-200 resize-y min-h-[120px]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent/50',
            errors.message ? 'border-red-500/50' : 'border-border hover:border-accent/30',
          )}
        />
        {errors.message && (
          <p id={`${messageId}-error`} role="alert" className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        loading={status === 'loading'}
        className="self-start"
      >
        <Send size={14} aria-hidden="true" />
        Send Message
      </Button>
    </form>
  )
}
