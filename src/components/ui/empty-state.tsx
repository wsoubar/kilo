import type { LucideIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink-900/15 bg-sand-100/50 px-6 py-12 text-center',
        className,
      )}
    >
      {Icon ? (
        <span className="grid size-14 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
          <Icon className="size-6" aria-hidden="true" />
        </span>
      ) : null}
      <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink-950">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  )
}
