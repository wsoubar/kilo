import { Bike, BookOpenText, Check, Clock, MessageCircle, QrCode } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { brand } from '@/data/brand'
import { formatCurrency } from '@/lib/format'
import { whatsappLink } from '@/lib/whatsapp'

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

const steps = [
  {
    number: '01',
    icon: BookOpenText,
    title: 'Escolha seus pratos',
    description: 'Navegue pelo cardápio, monte a sacola e escolha entrega ou retirada.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Envie no WhatsApp',
    description: 'O pedido chega organizado, com itens, endereço e forma de pagamento — sem ruído.',
  },
  {
    number: '03',
    icon: QrCode,
    title: 'Pague com Pix e receba',
    description: 'Escaneie o QR, pague no seu banco e acompanhe a entrega quentinha.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="como-pedir"
      className="scroll-mt-24 border-y border-ink-900/10 bg-sand-100/50 py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Como pedir"
            title="Três passos. Nenhuma complicação."
            description="Sem instalar aplicativo, sem criar conta e sem cair na caixa de spam de um marketplace."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.08 * index}
              className="group relative overflow-hidden rounded-[2rem] border border-ink-900/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-3xl font-semibold text-ink-900/10">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="olive" size="sm">
              <Check className="size-3" aria-hidden="true" />
              Sem cadastro
            </Badge>
            <Badge variant="neutral" size="sm">
              <Clock className="size-3" aria-hidden="true" />
              Entrega em {brand.delivery.estimate}
            </Badge>
            <Badge variant="neutral" size="sm">
              <Bike className="size-3" aria-hidden="true" />
              Retirada sem taxa
            </Badge>
            <Badge variant="neutral" size="sm">
              Pedido mínimo {formatCurrency(brand.delivery.minOrderCents)}
            </Badge>
          </div>

          <Button asChild variant="primary" size="lg" className="mt-2">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Começar meu pedido
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
