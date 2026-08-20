import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

const ProjectDetails = lazy(() =>
  import('@/pages/ProjectDetails').then((m) => ({ default: m.ProjectDetails })),
)

function PageLoader() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-background" aria-busy="true">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin"
          role="status"
          aria-label="Loading"
        />
        <span className="font-mono text-xs text-muted-text">Loading…</span>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/projects/:slug',
    element: (
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <ProjectDetails />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/404',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
