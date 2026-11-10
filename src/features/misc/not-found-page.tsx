import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { brand } from '@/data/brand'
import { whatsappLink } from '@/lib/whatsapp'

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <Badge variant="brand">Erro 404</Badge>

      <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-ink-950 sm:text-5xl">
        Essa página saiu do forno.
      </h1>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
        O link pode ter mudado ou a página nunca existiu. Volte ao cardápio e escolha seu prato com
        calma.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            Voltar ao cardápio
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </Container>
  )
}
