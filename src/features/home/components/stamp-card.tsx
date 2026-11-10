import { Check } from 'lucide-react'

import { brand } from '@/data/brand'
import { cn } from '@/lib/cn'

interface StampCardProps {
  filled?: number
  goal?: number
  className?: string
  compact?: boolean
}

export function StampCard({
  filled = brand.loyalty.demoFilled,
  goal = brand.loyalty.goal,
  className,
  compact = false,
}: StampCardProps) {
  const remaining = Math.max(goal - filled, 0)
  const progress = Math.min(100, Math.round((filled / goal) * 100))

  return (
    <div
      className={cn(
        'rounded-[1.75rem] border border-ink-900/10 bg-white shadow-lift',
        compact ? 'p-4' : 'p-5 sm:p-6',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'grid place-items-center rounded-xl bg-mango-100 text-mango-600',
            compact ? 'size-8' : 'size-10',
          )}
        >
          <span className="font-display text-sm font-bold" aria-hidden="true">
            {filled}
          </span>
        </span>
        <div>
          <p className={cn('font-bold text-ink-900', compact ? 'text-xs' : 'text-sm')}>
            Cartão da Vila
          </p>
          <p className="text-[10px] text-ink-500">
            {filled} de {goal} selos
          </p>
        </div>
      </div>

      <div className={cn('mt-3 grid grid-cols-5', compact ? 'gap-1.5' : 'gap-2')}>
        {Array.from({ length: goal }).map((_, index) => {
          const isFilled = index < filled

          return (
            <span
              key={index}
              className={cn(
                'grid aspect-square place-items-center rounded-full border text-[10px] font-bold',
                isFilled
                  ? 'border-brand-600 bg-brand-600 text-white shadow-sm'
                  : 'border-dashed border-ink-900/20 text-ink-300',
              )}
            >
              {isFilled ? (
                <Check className={compact ? 'size-3' : 'size-3.5'} aria-hidden="true" />
              ) : (
                index + 1
              )}
            </span>
          )
        })}
      </div>

      {!compact ? (
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-sand-200">
          <div
            className="h-full rounded-full bg-brand-600 transition-[width] duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      ) : null}

      <p
        className={cn(
          'leading-relaxed text-ink-500',
          compact ? 'mt-3 text-[10px]' : 'mt-3 text-xs',
        )}
      >
        {remaining > 0 ? (
          <>
            Faltam <strong className="font-bold text-ink-800">{remaining} selos</strong> para ganhar{' '}
            {brand.loyalty.reward}.
          </>
        ) : (
          <>
            Você ganhou <strong className="font-bold text-ink-800">{brand.loyalty.reward}</strong>!
          </>
        )}
      </p>
    </div>
  )
}
