import { BadgePercent, MessageCircle, QrCode, Wallet } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { brand } from '@/data/brand'

const features = [
  {
    icon: MessageCircle,
    title: 'Conversa de gente',
    description: 'O pedido chega organizado no WhatsApp da casa. Sem robô, sem app e sem cadastro.',
    tag: 'direto no zap',
    chat: true,
  },
  {
    icon: Wallet,
    title: 'Pix na hora',
    description: 'QR code e copia e cola na tela. Pague no banco que você já usa e pronto.',
    tag: 'sem maquininha',
    chat: false,
  },
  {
    icon: BadgePercent,
    title: 'Volte sempre',
    description: 'Cada pedido vira um selo. Ao completar o cartão, a casa te dá um presente.',
    tag: '10 selos',
    chat: false,
  },
  {
    icon: QrCode,
    title: 'Cardápio no QR',
    description: 'Aponte a câmera na mesa, no balcão ou no panfleto e o cardápio abre na hora.',
    tag: 'link e QR',
    chat: false,
  },
]

export function FeaturesSection() {
  return (
    <section id="a-casa" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Por que pedir direto"
              title={
                <>
                  Do nosso fogão para a sua casa,
                  <br className="hidden sm:block" /> sem intermediários.
                </>
              }
              description="A gente acredita em comida feita com calma, conversa boa e preço justo. O pedido vai direto para quem cozinha — e o valor fica todo na Vila."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <div className="flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white/70 p-3 pr-4 shadow-soft">
              <span className="grid size-10 place-items-center rounded-xl bg-mango-100 text-mango-600">
                <BadgePercent className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold text-ink-900">Cupom de boas-vindas</p>
                <p className="text-[11px] text-ink-500">
                  Use <span className="font-semibold text-brand-700">BEMVINDO10</span> no primeiro
                  pedido
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-7 text-sand-50 shadow-lift sm:p-9 lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />
            <div className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-brand-600/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-24 size-64 rounded-full border border-white/10" />

            <div className="relative">
              <Badge variant="light">Marketplace? Não, obrigado.</Badge>

              <h3 className="mt-5 max-w-md font-display text-3xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-4xl">
                0% de comissão. <span className="text-mango-300 italic">100%</span> para quem
                cozinha.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand-300/80">
                A taxa dos apps de delivery não entra aqui. O valor do seu pedido vai para o
                restaurante, para a equipe e para o ingrediente bom. Simples assim.
              </p>

              <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
                {[
                  { value: 'R$ 0', label: 'de taxa por pedido' },
                  { value: '100%', label: 'direto para a casa' },
                  { value: '30s', label: 'para enviar o pedido' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <p className="font-display text-xl font-semibold text-sand-50">{stat.value}</p>
                    <p className="mt-1 text-[10px] leading-snug text-sand-300/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={0.05 * (index + 1)}
              className="group flex flex-col rounded-[2rem] border border-ink-900/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.description}</p>

              {feature.chat ? (
                <div className="mt-5 space-y-2" aria-hidden="true">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-sand-100 px-3 py-2 text-[11px] leading-relaxed text-ink-600">
                    Oi! Quero 2 feijoadas e uma limonada 🍲
                  </div>
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-olive-100 px-3 py-2 text-[11px] leading-relaxed text-olive-700">
                    Pedido #1042 recebido. Já está no fogão! 🔥
                  </div>
                </div>
              ) : null}

              <div className="mt-auto pt-5">
                <Badge variant="neutral" size="sm">
                  {feature.tag}
                </Badge>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <p className="text-center text-xs text-ink-400">
            {brand.name} · {brand.address.street}, {brand.address.district} · {brand.hours}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
