import type { SkillCategory } from '@/types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Server-side development, APIs, and business logic',
    skills: [
      { name: 'PHP', level: 'core' },
      { name: 'Laravel', level: 'core' },
      { name: 'REST APIs', level: 'core' },
      { name: 'Eloquent ORM', level: 'core' },
      { name: 'Service Layer', level: 'core' },
      { name: 'Authentication', level: 'proficient' },
      { name: 'Authorization', level: 'proficient' },
      { name: 'Queues / Jobs', level: 'proficient' },
      { name: 'Cron Jobs', level: 'proficient' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'UI development, state management, and user experience',
    skills: [
      { name: 'React', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'Redux', level: 'proficient' },
      { name: 'Formik', level: 'proficient' },
      { name: 'Yup', level: 'proficient' },
      { name: 'React Bootstrap', level: 'proficient' },
      { name: 'React Quill', level: 'familiar' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Data modeling, querying, and optimization',
    skills: [
      { name: 'MySQL', level: 'core' },
      { name: 'Query Optimization', level: 'proficient' },
      { name: 'Indexes', level: 'proficient' },
      { name: 'Pagination', level: 'proficient' },
      { name: 'Data Modeling', level: 'proficient' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Cloud services, deployment, and server management',
    skills: [
      { name: 'AWS S3', level: 'proficient' },
      { name: 'CloudFront', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Apache', level: 'proficient' },
      { name: 'Git', level: 'core' },
      { name: 'Deployment', level: 'proficient' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Architecture, quality, and development practices',
    skills: [
      { name: 'Clean Architecture', level: 'core' },
      { name: 'Performance Optimization', level: 'proficient' },
      { name: 'PHPStan', level: 'proficient' },
      { name: 'Larastan', level: 'proficient' },
      { name: 'Refactoring', level: 'proficient' },
      { name: 'Scalability', level: 'proficient' },
      { name: 'API Design', level: 'proficient' },
    ],
  },
]
