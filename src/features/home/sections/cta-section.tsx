import { MessageCircle, Share2 } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import * as React from 'react'

import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { brand } from '@/data/brand'
import { sharePage } from '@/lib/share'
import { whatsappLink } from '@/lib/whatsapp'

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

export function CtaSection() {
  const { toast } = useToast()
  const [shareUrl] = React.useState(() => `${window.location.origin}${window.location.pathname}`)

  const handleShare = async () => {
    try {
      const result = await sharePage({
        title: brand.name,
        text: brand.tagline,
        url: shareUrl,
      })

      if (result === 'copied') {
        toast({
          title: 'Link copiado!',
          description: 'Agora é só colar no WhatsApp ou onde quiser.',
          variant: 'success',
        })
      }

      if (result === 'shared') {
        toast({ title: 'Cardápio compartilhado', variant: 'success' })
      }
    } catch {
      toast({
        title: 'Não foi possível compartilhar',
        description: 'Copie o endereço direto da barra do navegador.',
        variant: 'error',
      })
    }
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-600 px-6 py-10 text-sand-50 shadow-glow sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute inset-0 grain opacity-[0.09]" />
          <div className="pointer-events-none absolute -top-28 -right-16 size-80 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-mango-400/20 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <Badge variant="light">Bateu a fome?</Badge>

              <h2 className="mt-5 font-display text-4xl leading-[1.03] font-semibold tracking-[-0.035em] sm:text-5xl">
                Peça agora,
                <br />
                direto no WhatsApp.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-sand-100/90 sm:text-base">
                Sem cadastro, sem marketplace. Escolha seus pratos, envie o pedido e pague com Pix.
                A casa cuida do resto.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Pedir no WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outlineLight"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={handleShare}
                >
                  <Share2 aria-hidden="true" />
                  Compartilhar cardápio
                </Button>
              </div>

              <p className="mt-5 text-[11px] text-sand-100/70">
                Delivery em {brand.delivery.estimate} · Retirada sem taxa · {brand.address.district}
              </p>
            </div>

            <div className="mx-auto w-full max-w-[15rem] rounded-3xl bg-sand-50 p-4 text-center text-ink-950 shadow-lift">
              <div className="rounded-2xl bg-white p-2">
                <QRCodeSVG
                  value={shareUrl}
                  size={160}
                  bgColor="#ffffff"
                  fgColor="#241d18"
                  level="M"
                  marginSize={0}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-xs font-bold">Aponte a câmera e peça</p>
              <p className="mt-1 text-[10px] text-ink-500">Cardápio no QR · sem instalar app</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
