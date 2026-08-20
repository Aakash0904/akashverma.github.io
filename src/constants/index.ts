export const SITE_CONFIG = {
  name: 'Akash Verma',
  title: 'Full Stack Developer',
  tagline: 'Laravel · PHP · React',
  description:
    'I build scalable SaaS applications, reliable APIs, and maintainable production systems.',
  url: 'https://aakashverma.dev',
  email: 'patelaakash2203@gmail.com',
  github: 'https://github.com/aakashverma',
  linkedin: 'https://www.linkedin.com/in/verma-akash-9151511a4',
  resumeUrl: '/Akash-Verma-FullStack.pdf',
} as const

export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  engineering: 'engineering',
  contact: 'contact',
} as const

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const
