import { Check, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/format'

import { StampCard } from './stamp-card'

const orderItems = [
  { name: 'Feijoada da casa', detail: '2x · sem pimenta', cents: 8980 },
  { name: 'Limonada da casa', detail: '1x · bem gelada', cents: 990 },
]

export function HeroArt() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[30rem]"
    >
      <div className="absolute inset-6 rounded-[3rem] bg-brand-500/10 blur-2xl" />

      <div className="absolute -top-3 -right-1 z-20 rotate-3 rounded-full bg-mango-300 px-3.5 py-1.5 text-[11px] font-bold text-ink-950 shadow-soft sm:-right-3">
        0% comissão
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <div className="rounded-[2.5rem] bg-ink-950 p-3 shadow-lift sm:p-4">
          <div className="relative overflow-hidden rounded-[1.9rem] bg-sand-50 p-4 sm:p-5">
            <div className="pointer-events-none absolute inset-0 grain opacity-[0.025]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.22em] text-ink-400 uppercase">
                    Pedido
                  </p>
                  <p className="font-display text-2xl font-semibold tracking-tight text-ink-950">
                    #1042
                  </p>
                </div>
                <Badge variant="success" size="sm">
                  <Check className="size-3" aria-hidden="true" />
                  Enviado
                </Badge>
              </div>

              <div className="mt-4 space-y-2.5">
                {orderItems.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[13px] font-bold text-ink-900">{item.name}</p>
                      <p className="text-[10px] text-ink-500">{item.detail}</p>
                    </div>
                    <p className="text-[13px] font-semibold text-ink-900 tabular-nums">
                      {formatCurrency(item.cents)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-3 border-t border-dashed border-ink-900/15" />

              <dl className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <dt className="text-ink-500">Subtotal</dt>
                  <dd className="font-medium text-ink-800 tabular-nums">{formatCurrency(9970)}</dd>
                </div>
                <div className="flex justify-between text-olive-600">
                  <dt>Cupom BEMVINDO10</dt>
                  <dd className="font-medium tabular-nums">− {formatCurrency(997)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-500">Entrega</dt>
                  <dd className="font-medium text-ink-800 tabular-nums">{formatCurrency(600)}</dd>
                </div>
                <div className="flex items-end justify-between border-t border-ink-900/10 pt-2">
                  <dt className="font-display text-sm font-semibold text-ink-950">Total</dt>
                  <dd className="font-display text-base font-semibold text-ink-950 tabular-nums">
                    {formatCurrency(9573)}
                  </dd>
                </div>
              </dl>

              <div className="mt-3 flex items-center justify-between rounded-xl bg-olive-100 px-2.5 py-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-olive-700">
                  <span className="grid size-5 place-items-center rounded-full bg-olive-500 text-white">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  Pix já pago
                </span>
                <span className="text-[9px] text-olive-600">agora mesmo</span>
              </div>

              <p className="mt-2 flex items-center justify-center gap-1.5 text-[9px] font-semibold text-ink-400">
                <MessageCircle className="size-3" aria-hidden="true" />
                Enviado no WhatsApp da casa
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto -mt-5 w-40 rotate-[-2deg] sm:w-44">
        <StampCard compact />
      </div>
    </div>
  )
}
