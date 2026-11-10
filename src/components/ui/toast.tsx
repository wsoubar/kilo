import * as ToastPrimitives from '@radix-ui/react-toast'
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/cn'
import { createId } from '@/lib/id'

import { ToastContext, type ToastItem, type ToastOptions, type ToastVariant } from './use-toast'

const variantStyles: Record<
  ToastVariant,
  { icon: React.ReactNode; iconClassName: string; borderClassName: string }
> = {
  success: {
    icon: <CheckCircle2 className="size-4" aria-hidden="true" />,
    iconClassName: 'bg-success-50 text-success-600',
    borderClassName: 'border-success-100',
  },
  error: {
    icon: <AlertCircle className="size-4" aria-hidden="true" />,
    iconClassName: 'bg-danger-50 text-danger-600',
    borderClassName: 'border-danger-100',
  },
  info: {
    icon: <Info className="size-4" aria-hidden="true" />,
    iconClassName: 'bg-brand-50 text-brand-700',
    borderClassName: 'border-brand-100',
  },
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const toast = React.useCallback((options: ToastOptions) => {
    setToasts((current) => [...current, { id: createId(), variant: 'info', ...options }])
  }, [])

  const dismiss = React.useCallback((id: string) => {
    setToasts((current) => current.filter((item) => item.id !== id))
  }, [])

  const value = React.useMemo(() => ({ toast }), [toast])

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitives.Provider swipeDirection="right" duration={4800}>
        {children}
        {toasts.map((item) => {
          const variant = item.variant ?? 'info'
          const styles = variantStyles[variant]

          return (
            <ToastPrimitives.Root
              key={item.id}
              onOpenChange={(open) => {
                if (!open) dismiss(item.id)
              }}
              className={cn(
                'pointer-events-auto relative flex w-full items-start gap-3 rounded-2xl border bg-white p-4 shadow-lift data-[state=closed]:animate-toast-out data-[state=open]:animate-toast-in',
                styles.borderClassName,
              )}
            >
              <span
                className={cn(
                  'mt-0.5 grid size-8 shrink-0 place-items-center rounded-full',
                  styles.iconClassName,
                )}
              >
                {styles.icon}
              </span>
              <div className="min-w-0 flex-1">
                <ToastPrimitives.Title className="text-sm font-bold text-ink-950">
                  {item.title}
                </ToastPrimitives.Title>
                {item.description ? (
                  <ToastPrimitives.Description className="mt-1 text-xs leading-relaxed text-ink-500">
                    {item.description}
                  </ToastPrimitives.Description>
                ) : null}
              </div>
              <ToastPrimitives.Close
                aria-label="Fechar aviso"
                className="grid size-7 shrink-0 place-items-center rounded-full text-ink-400 transition hover:bg-ink-900/5 hover:text-ink-900"
              >
                <X className="size-4" aria-hidden="true" />
              </ToastPrimitives.Close>
            </ToastPrimitives.Root>
          )
        })}
        <ToastPrimitives.Viewport className="fixed inset-x-4 bottom-4 z-[100] flex w-auto flex-col gap-2 pb-[env(safe-area-inset-bottom)] outline-none sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[24rem]" />
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}
