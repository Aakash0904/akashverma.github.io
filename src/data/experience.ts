import type { ExperienceItem } from '@/types'

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'jr-software-developer',
    role: 'Jr. Software Developer',
    company: 'Software Company',
    period: '2024 – Present',
    type: 'Full-time',
    responsibilities: [
      'Developed and maintained Laravel REST APIs powering multiple SaaS product modules including HRMS, Leave Management, Attendance, and Timesheet.',
      'Built React-based frontend interfaces connected to internal APIs, implementing data grids, forms, and workflow UIs.',
      'Implemented service-oriented architecture in Laravel, separating business logic from controllers using dedicated service and repository layers.',
      'Optimized database queries through proper indexing, eager loading, and reducing N+1 query patterns across high-use endpoints.',
      'Contributed to the Performance Management module including appraisal workflows, review cycles, and status-driven business logic.',
      'Developed the Lead Management and CRM module with CSV import, duplicate detection, pipeline views, and filtering.',
      'Refactored existing controller-heavy code into cleaner service-based implementations to improve maintainability.',
      'Resolved production issues including query performance, broken workflows, and edge-case handling.',
      'Supported client deployments, environment setup, and configuration for production instances.',
      'Participated in code reviews, enforced coding standards, and applied PHPStan/Larastan analysis to maintain type safety.',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'React',
      'JavaScript',
      'MySQL',
      'REST APIs',
      'AWS S3',
      'Git',
      'Linux',
    ],
  },
]
