import { ArrowRight, ShoppingBag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { brand } from '@/data/brand'
import { formatCurrency } from '@/lib/format'

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBrowse: () => void
}

export function CartSheet({ open, onOpenChange, onBrowse }: CartSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sua sacola</SheetTitle>
          <SheetDescription>Monte seu pedido e envie direto no WhatsApp da casa.</SheetDescription>
        </SheetHeader>

        <SheetBody className="flex flex-col justify-center">
          <EmptyState
            icon={ShoppingBag}
            title="Sua sacola está vazia"
            description="O cardápio completo está sendo preparado. Enquanto isso, veja como é simples pedir."
            action={
              <Button
                onClick={() => {
                  onOpenChange(false)
                  onBrowse()
                }}
              >
                Como pedir
                <ArrowRight aria-hidden="true" />
              </Button>
            }
          />
        </SheetBody>

        <SheetFooter>
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-500">Pedido mínimo</span>
            <span className="font-bold text-ink-900">
              {formatCurrency(brand.delivery.minOrderCents)}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-ink-500">Entrega</span>
            <span className="font-bold text-ink-900">
              {formatCurrency(brand.delivery.feeCents)} · {brand.delivery.estimate}
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
