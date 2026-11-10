import * as React from 'react'

import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
  action?: React.ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase',
            inverted ? 'text-brand-300' : 'text-brand-700',
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          'font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]',
          inverted ? 'text-sand-50' : 'text-ink-950',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed',
            inverted ? 'text-sand-300/80' : 'text-ink-500',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
