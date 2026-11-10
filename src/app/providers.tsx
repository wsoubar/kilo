import { TooltipProvider } from '@radix-ui/react-tooltip'
import { MotionConfig } from 'motion/react'
import * as React from 'react'

import { ToastProvider } from '@/components/ui/toast'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={250}>
        <ToastProvider>{children}</ToastProvider>
      </TooltipProvider>
    </MotionConfig>
  )
}
