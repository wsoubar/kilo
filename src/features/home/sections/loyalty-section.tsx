import { ArrowRight, Check, Sparkles } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { brand } from '@/data/brand'
import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { whatsappLink } from '@/lib/whatsapp'

import { StampCard } from '../components/stamp-card'

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

const bullets = [
  '1 selo por pedido, seja delivery ou retirada.',
  '10 selos viram 15% de desconto no próximo pedido.',
  'Sem letras miúdas: o cartão fica salvo no seu navegador.',
]

export function LoyaltySection() {
  const goToSection = useSectionNavigation()

  return (
    <section
      id="fidelidade"
      className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-20 text-sand-50 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-32 left-1/3 size-[32rem] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-40 size-[28rem] rounded-full bg-mango-500/10 blur-3xl" />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            inverted
            eyebrow="Fidelidade da casa"
            title={
              <>
                Volte sempre. <span className="text-mango-300 italic">A casa agradece.</span>
              </>
            }
            description="Não é programa de pontos complicado. É um cartão na porta da geladeira: pedido feito, selo ganho. Ao completar o cartão, o próximo pedido sai com desconto."
          />

          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-sand-300/85">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-olive-500/20 text-olive-300">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <Sparkles aria-hidden="true" />
                Quero ganhar meu selo
              </a>
            </Button>
            <Button
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => goToSection('como-pedir')}
            >
              Como funciona
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-brand-600/20 blur-sm" />
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-mango-200 via-sand-100 to-brand-200 p-3 shadow-lift">
            <StampCard />
          </div>

          <div className="absolute -right-3 -bottom-5 rotate-3 rounded-2xl bg-mango-300 px-4 py-3 text-ink-950 shadow-lift">
            <p className="font-display text-2xl leading-none font-bold">15%</p>
            <p className="mt-1 text-[9px] font-bold tracking-[0.18em] uppercase">off no próximo</p>
          </div>

          <div className="absolute -top-5 -left-3 -rotate-6 rounded-full border border-white/20 bg-ink-900 px-3 py-1.5 text-[10px] font-bold text-sand-100 shadow-lift">
            +1 selo por pedido
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
