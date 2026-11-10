import { Suspense, lazy } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { StorefrontLayout } from '@/components/layout/storefront-layout'
import { HomePage } from '@/features/home/home-page'
import { NotFoundPage } from '@/features/misc/not-found-page'

import { AppProviders } from './providers'
import { ScrollToTop } from './scroll-to-top'

const AdminPage = lazy(() =>
  import('@/features/admin/admin-page').then((module) => ({ default: module.AdminPage })),
)

export function App() {
  return (
    <AppProviders>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<StorefrontLayout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route
            path="admin"
            element={
              <Suspense fallback={<div className="min-h-dvh bg-ink-950" />}>
                <AdminPage />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
    </AppProviders>
  )
}
