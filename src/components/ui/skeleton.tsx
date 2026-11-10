import * as React from 'react'

import { cn } from '@/lib/cn'

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded-2xl bg-ink-900/8', className)}
      {...props}
    />
  )
}
