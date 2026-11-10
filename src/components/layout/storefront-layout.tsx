import { Outlet } from 'react-router-dom'

import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function StorefrontLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#conteudo"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('conteudo')?.focus()
        }}
        className="sr-only rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-sand-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
