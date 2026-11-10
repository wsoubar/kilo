import { AtSign, MapPin, MessageCircle, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Logo } from '@/components/brand/logo'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { brand } from '@/data/brand'
import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { sharePage } from '@/lib/share'
import { whatsappLink } from '@/lib/whatsapp'

import { Container } from './container'

const navItems = [
  { label: 'A casa', id: 'a-casa' },
  { label: 'Como pedir', id: 'como-pedir' },
  { label: 'Fidelidade', id: 'fidelidade' },
]

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)
const instagramUrl = `https://instagram.com/${brand.instagram.replace('@', '')}`
const currentYear = new Date().getFullYear()

export function SiteFooter() {
  const goToSection = useSectionNavigation()
  const { toast } = useToast()

  const handleShare = async () => {
    try {
      const result = await sharePage({
        title: brand.name,
        text: brand.tagline,
        url: window.location.href,
      })

      if (result === 'copied') {
        toast({
          title: 'Link copiado!',
          description: 'Agora é só colar no WhatsApp ou onde quiser.',
          variant: 'success',
        })
      }
    } catch {
      toast({
        title: 'Não foi possível copiar o link',
        description: 'Copie o endereço direto da barra do navegador.',
        variant: 'error',
      })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-sand-200">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-brand-600/15 blur-3xl" />

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1.1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-300/75">
              {brand.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="secondary" size="sm">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-sand-200 hover:bg-white/10 hover:text-white"
                onClick={handleShare}
              >
                <Share2 aria-hidden="true" />
                Compartilhar
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold tracking-[0.22em] text-sand-300/50 uppercase">
              Navegue
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className="text-sand-300/80 transition hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sand-300/80 transition hover:text-white"
                >
                  Pedir no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-bold tracking-[0.22em] text-sand-300/50 uppercase">
              Contato
            </h2>
            <address className="mt-4 space-y-3 text-sm text-sand-300/80 not-italic">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden="true" />
                <span>
                  {brand.address.street}
                  <br />
                  {brand.address.district} · {brand.address.city}
                </span>
              </p>
              <p>{brand.hours}</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <AtSign className="size-4 text-brand-300" aria-hidden="true" />
                {brand.instagram}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[10px] font-bold tracking-[0.22em] text-sand-300/50 uppercase">
              Para o restaurante
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/admin" className="text-sand-300/80 transition hover:text-white">
                  Painel do restaurante
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleShare}
                  className="text-sand-300/80 transition hover:text-white"
                >
                  Compartilhar cardápio
                </button>
              </li>
              <li className="pt-2 text-xs leading-relaxed text-sand-300/45">
                Cardápio digital por <span className="font-semibold text-sand-300/70">MesaJá</span>
                <br />
                sem comissão de marketplace
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-sand-300/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {brand.name}. Feito com carinho na Vila Mariana.
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-olive-400" aria-hidden="true" />
            Seus dados ficam salvos neste navegador
          </p>
        </div>
      </Container>
    </footer>
  )
}
