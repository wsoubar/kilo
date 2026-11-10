import * as React from 'react'

export type ToastVariant = 'success' | 'error' | 'info'

export interface ToastOptions {
  title: string
  description?: string
  variant?: ToastVariant
}

export interface ToastItem extends ToastOptions {
  id: string
}

export interface ToastContextValue {
  toast: (options: ToastOptions) => void
}

export const ToastContext = React.createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error('useToast precisa ser usado dentro de <ToastProvider>.')
  }

  return context
}
