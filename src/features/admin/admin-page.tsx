import {
  ArrowLeft,
  BadgePercent,
  BookOpenText,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  QrCode,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Logo } from '@/components/brand/logo'
import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { brand } from '@/data/brand'
import { cn } from '@/lib/cn'
import { whatsappLink } from '@/lib/whatsapp'

const whatsappHref = whatsappLink(
  brand.whatsapp,
  'Olá! Quero saber mais sobre o painel do restaurante da MesaJá.',
)

const modules = [
  {
    icon: LayoutDashboard,
    title: 'Pedidos',
    description: 'Acompanhe e avance o status de cada pedido.',
  },
  {
    icon: BookOpenText,
    title: 'Cardápio',
    description: 'Categorias, pratos, adicionais e disponibilidade.',
  },
  {
    icon: BadgePercent,
    title: 'Cupons',
    description: 'Crie promoções e acompanhe os usos.',
  },
  {
    icon: Sparkles,
    title: 'Fidelidade',
    description: 'Selos, metas e recompensas da casa.',
  },
  {
    icon: QrCode,
    title: 'QR code',
    description: 'Baixe o cartaz do cardápio para a mesa.',
  },
]

export function AdminPage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-ink-950 text-sand-50">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-40 size-[28rem] rounded-full bg-mango-500/10 blur-3xl" />

      <Container className="relative flex flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 py-5">
          <Link to="/" aria-label={`${brand.name} — início`} className="rounded-2xl">
            <Logo inverted />
          </Link>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-sand-200 hover:bg-white/10 hover:text-white"
          >
            <Link to="/">
              <ArrowLeft aria-hidden="true" />
              <span className="hidden sm:inline">Voltar ao cardápio</span>
              <span className="sm:hidden">Voltar</span>
            </Link>
          </Button>
        </header>

        <main className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-lift backdrop-blur-xl sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-sand-50 shadow-glow">
                <LockKeyhole className="size-5" aria-hidden="true" />
              </span>
              <Badge variant="light">Em breve</Badge>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl">
              Painel do restaurante
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand-300/80">
              Pedidos, cardápio, cupons e fidelidade em um só lugar. Estamos preparando os últimos
              detalhes para você cuidar da casa sem depender de marketplace.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {modules.map((module, index) => (
                <div
                  key={module.title}
                  className={cn(
                    'flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4',
                    index === modules.length - 1 && 'sm:col-span-2',
                  )}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-brand-300">
                    <module.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-sand-50">{module.title}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-sand-300/55">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary">
                <Link to="/">
                  <ArrowLeft aria-hidden="true" />
                  Voltar ao cardápio
                </Link>
              </Button>
              <Button asChild variant="outlineLight">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Falar com a MesaJá
                </a>
              </Button>
            </div>

            <p className="mt-6 flex items-center gap-2 text-[11px] text-sand-300/45">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Protótipo · seus dados ficam salvos neste navegador.
            </p>
          </div>
        </main>

        <footer className="py-5 text-center text-[11px] text-sand-300/40">
          {brand.name} · cardápio digital por MesaJá
        </footer>
      </Container>
    </div>
  )
}
