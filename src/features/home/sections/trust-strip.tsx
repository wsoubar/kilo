import { BadgePercent, MessageCircle, QrCode, ShieldCheck } from 'lucide-react'

import { Container } from '@/components/layout/container'

const items = [
  {
    icon: ShieldCheck,
    title: 'Sem comissão',
    description: 'Você paga só a comida',
  },
  {
    icon: MessageCircle,
    title: 'Direto no WhatsApp',
    description: 'Pedido organizado, sem app',
  },
  {
    icon: QrCode,
    title: 'Cardápio no QR',
    description: 'Aponte a câmera e peça',
  },
  {
    icon: BadgePercent,
    title: 'Cupom e fidelidade',
    description: 'Volte sempre e ganhe',
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-ink-900/10 bg-sand-100/60">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 sm:grid-cols-4 sm:py-7">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-ink-900/10 bg-white text-brand-600 shadow-soft">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-wide text-ink-800 uppercase">
                {item.title}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-500">{item.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
