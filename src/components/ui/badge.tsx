import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border leading-none font-semibold',
  {
    variants: {
      variant: {
        brand: 'border-brand-200 bg-brand-50 text-brand-800',
        neutral: 'border-ink-900/10 bg-sand-100 text-ink-700',
        success: 'border-success-100 bg-success-50 text-success-600',
        warning: 'border-mango-200 bg-mango-50 text-mango-600',
        olive: 'border-olive-200 bg-olive-50 text-olive-700',
        outline: 'border-ink-900/15 bg-transparent text-ink-600',
        dark: 'border-ink-800 bg-ink-900 text-sand-100',
        light: 'border-white/20 bg-white/10 text-sand-50',
      },
      size: {
        sm: 'px-2.5 py-1 text-[10px]',
        md: 'px-3 py-1.5 text-[11px]',
      },
    },
    defaultVariants: {
      variant: 'brand',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}
