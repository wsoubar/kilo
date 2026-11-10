import { ArrowRight, BadgePercent, MessageCircle, QrCode, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { brand } from '@/data/brand'
import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { whatsappLink } from '@/lib/whatsapp'

import { HeroArt } from '../components/hero-art'

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

const trustItems = [
  { icon: ShieldCheck, label: 'Sem comissão' },
  { icon: QrCode, label: 'Cardápio no QR' },
  { icon: BadgePercent, label: 'Cupom e fidelidade' },
]

export function HeroSection() {
  const goToSection = useSectionNavigation()

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_85%_10%,rgba(243,178,60,0.18),transparent_60%),radial-gradient(60%_50%_at_10%_20%,rgba(201,79,50,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-[0.035]" />

      <Container className="grid gap-16 pt-12 pb-24 sm:gap-20 sm:pt-16 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pt-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge
            variant="outline"
            className="border-ink-900/15 bg-white/70 px-3 py-1.5 text-[11px] text-ink-700 backdrop-blur"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-olive-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-olive-500" />
            </span>
            Aberto hoje · até 23h
          </Badge>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,8vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink-950 max-[359px]:text-[2.2rem]">
            Comida de verdade,
            <br />
            <span className="relative inline-block text-brand-600 italic">
              direto
              <svg
                className="absolute -bottom-2 left-0 h-2.5 w-full text-mango-400"
                viewBox="0 0 120 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7c30-5 60-5 116 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            de quem faz.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Feijoada que cozinha no ritmo da casa, moqueca de peixe fresco e sobremesa de vó. Peça
            pelo nosso cardápio e receba onde estiver — sem app, sem cadastro e sem taxa de
            marketplace.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => goToSection('como-pedir')}
            >
              Como pedir
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] font-semibold text-ink-600">
            {trustItems.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-1.5">
                <item.icon className="size-3.5 text-brand-600" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>

          <p className="mt-5 text-xs text-ink-400">
            {brand.address.district} e região · entrega em {brand.delivery.estimate}
          </p>
        </motion.div>

        <div className="lg:pt-4">
          <HeroArt />
        </div>
      </Container>
    </section>
  )
}
