import * as React from 'react'

import { cn } from '@/lib/cn'

interface FieldProps {
  label?: string
  hint?: string
  error?: string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FieldProps {
  leadingIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, id, label, hint, error, leadingIcon, ...props },
  ref,
) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const descriptionId = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-2 block text-xs font-bold tracking-wide text-ink-700"
        >
          {label}
        </label>
      ) : null}
      <div className="relative">
        {leadingIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-ink-400 [&_svg]:size-4">
            {leadingIcon}
          </span>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={descriptionId}
          className={cn(
            'h-11 w-full rounded-2xl border border-ink-900/15 bg-white px-4 text-sm text-ink-900 shadow-inset transition placeholder:text-ink-400 hover:border-ink-900/25 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none aria-invalid:border-danger-500 aria-invalid:ring-danger-500/15',
            leadingIcon && 'pl-11',
            className,
          )}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="mt-1.5 text-xs font-medium text-danger-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      ) : null}
    </div>
  )
})

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, FieldProps {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, id, label, hint, error, rows = 3, ...props },
  ref,
) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId
  const descriptionId = error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-xs font-bold tracking-wide text-ink-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={descriptionId}
        className={cn(
          'w-full resize-y rounded-2xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 shadow-inset transition placeholder:text-ink-400 hover:border-ink-900/25 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none aria-invalid:border-danger-500 aria-invalid:ring-danger-500/15',
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={`${textareaId}-error`} className="mt-1.5 text-xs font-medium text-danger-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${textareaId}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      ) : null}
    </div>
  )
})
