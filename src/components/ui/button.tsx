import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,background-color,color,box-shadow,border-color] duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-600 text-sand-50 shadow-soft hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift',
        secondary: 'bg-sand-100 text-ink-900 ring-1 ring-ink-900/10 ring-inset hover:bg-sand-200',
        outline: 'bg-transparent text-ink-900 ring-1 ring-ink-900/20 ring-inset hover:bg-ink-900/5',
        outlineLight:
          'bg-transparent text-sand-50 ring-1 ring-white/35 ring-inset hover:bg-white/10',
        ghost: 'text-ink-700 hover:bg-ink-900/5 hover:text-ink-950',
        dark: 'bg-ink-950 text-sand-50 shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lift',
        danger: 'bg-danger-500 text-white shadow-soft hover:bg-danger-600',
        whatsapp:
          'bg-olive-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-olive-600 hover:shadow-lift',
        link: 'h-auto rounded-none p-0 text-brand-700 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-13 px-7 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    disabled,
    children,
    type,
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : (type ?? 'button')}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={asChild ? undefined : disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {isLoading ? <Loader2 className="animate-spin" aria-hidden="true" /> : null}
          {children}
        </>
      )}
    </Comp>
  )
})
