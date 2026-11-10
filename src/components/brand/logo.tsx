import { cn } from '@/lib/cn'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('size-10 shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="18" fill="#C94F32" />
      <path d="M14 37h36c0 9.4-8.1 17-18 17s-18-7.6-18-17Z" fill="#FFFAF3" />
      <path d="M11 34h42" stroke="#FFFAF3" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M25 24c0-3.5 3-3.5 3-7M33 25c0-3.5 3-3.5 3-7"
        stroke="#FFFAF3"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="47" cy="18" r="4" fill="#F3B23C" />
    </svg>
  )
}

interface LogoProps {
  inverted?: boolean
  compact?: boolean
  className?: string
}

export function Logo({ inverted = false, compact = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex shrink-0 items-center gap-2.5', className)}>
      <LogoMark className={cn('size-10', inverted && 'ring-1 ring-white/15')} />
      <span className="flex flex-col">
        <span
          className={cn(
            'font-display text-[0.82rem] leading-none font-semibold tracking-tight whitespace-nowrap min-[360px]:text-[1.05rem] sm:text-[1.18rem]',
            inverted ? 'text-sand-50' : 'text-ink-950',
          )}
        >
          Tempero{' '}
          <span className={cn('italic', inverted ? 'text-brand-300' : 'text-brand-600')}>
            da Vila
          </span>
        </span>
        {!compact ? (
          <span
            className={cn(
              'mt-1 hidden text-[8.5px] font-bold tracking-[0.24em] uppercase sm:block',
              inverted ? 'text-sand-300/80' : 'text-ink-400',
            )}
          >
            Comida de verdade
          </span>
        ) : null}
      </span>
    </span>
  )
}
