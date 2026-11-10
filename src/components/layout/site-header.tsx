import { ArrowUpRight, Menu, MessageCircle, Share2, ShoppingBag } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '@/components/brand/logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useToast } from '@/components/ui/use-toast'
import { brand } from '@/data/brand'
import { CartSheet } from '@/features/cart/cart-sheet'
import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { cn } from '@/lib/cn'
import { sharePage } from '@/lib/share'
import { whatsappLink } from '@/lib/whatsapp'

import { Container } from './container'

const navItems = [
  { label: 'A casa', id: 'a-casa' },
  { label: 'Como pedir', id: 'como-pedir' },
  { label: 'Fidelidade', id: 'fidelidade' },
]

const whatsappHref = whatsappLink(brand.whatsapp, brand.whatsappMessage)

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const goToSection = useSectionNavigation()
  const { toast } = useToast()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleShare = React.useCallback(async () => {
    setMobileMenuOpen(false)

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
  }, [toast])

  const handleNavigate = (id: string) => {
    setMobileMenuOpen(false)
    goToSection(id)
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300',
          scrolled
            ? 'border-ink-900/10 bg-sand-50/85 shadow-[0_12px_32px_-28px_rgba(25,20,17,0.55)] backdrop-blur-xl'
            : 'border-transparent bg-sand-50/60 backdrop-blur-md',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
          <Link
            to="/"
            aria-label={`${brand.name} — início`}
            className="rounded-2xl transition hover:opacity-90"
          >
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="group relative rounded-full px-4 py-2 text-sm font-semibold text-ink-600 transition hover:text-ink-950"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Compartilhar cardápio"
              className="hidden sm:inline-flex"
              onClick={handleShare}
            >
              <Share2 aria-hidden="true" />
            </Button>

            <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Pedir no WhatsApp
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Abrir sacola, 0 itens"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink-950 px-3.5 text-sm font-semibold text-sand-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lift sm:px-4"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Sacola</span>
              <span className="grid size-5 place-items-center rounded-full bg-white/15 text-[10px] font-bold tabular-nums">
                0
              </span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </header>

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        onBrowse={() => goToSection('como-pedir')}
      />

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Cardápio da Vila</SheetTitle>
            <SheetDescription>Comida de verdade, direto de quem faz.</SheetDescription>
          </SheetHeader>

          <SheetBody className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-semibold text-ink-800 transition hover:bg-ink-900/5 hover:text-ink-950"
              >
                {item.label}
                <ArrowUpRight className="size-4 text-ink-400" aria-hidden="true" />
              </button>
            ))}

            <div className="my-4 h-px bg-ink-900/10" />

            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Pedir no WhatsApp
              </a>
            </Button>

            <Button variant="outline" size="lg" className="mt-2 w-full" onClick={handleShare}>
              <Share2 aria-hidden="true" />
              Compartilhar cardápio
            </Button>
          </SheetBody>

          <SheetFooter>
            <div className="space-y-1 text-xs text-ink-500">
              <p className="font-bold tracking-wide text-ink-700 uppercase">Horário</p>
              <p>{brand.hours}</p>
              <p>
                {brand.address.street} · {brand.address.district}
              </p>
            </div>
            <Button asChild variant="link" className="mt-4">
              <Link to="/admin">Painel do restaurante</Link>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
