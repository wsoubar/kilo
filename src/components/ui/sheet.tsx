import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  side?: 'right' | 'bottom'
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  SheetContentProps
>(function SheetContent({ className, children, side = 'right', ...props }, ref) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/45 backdrop-blur-[3px] data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
      <Dialog.Content
        ref={ref}
        className={cn(
          'fixed z-50 flex flex-col bg-sand-50 shadow-lift focus:outline-none',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-[min(92vw,26rem)] border-l border-ink-900/10 data-[state=closed]:animate-sheet-out-right data-[state=open]:animate-sheet-in-right',
          side === 'bottom' &&
            'inset-x-0 bottom-0 max-h-[88dvh] rounded-t-[2rem] border-t border-ink-900/10 data-[state=closed]:animate-sheet-out-bottom data-[state=open]:animate-sheet-in-bottom',
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full text-ink-500 transition hover:bg-ink-900/5 hover:text-ink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          <X className="size-5" aria-hidden="true" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
})

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1 p-6 pr-14 pb-3', className)} {...props} />
}

export function SheetBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex-1 overflow-y-auto px-6 py-4', className)} {...props} />
}

export function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-t border-ink-900/10 bg-sand-100/60 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6',
        className,
      )}
      {...props}
    />
  )
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn('font-display text-2xl font-semibold tracking-tight text-ink-950', className)}
      {...props}
    />
  )
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Description>) {
  return <Dialog.Description className={cn('text-sm text-ink-500', className)} {...props} />
}
