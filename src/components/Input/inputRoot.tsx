import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps {
  label: string
  className?: string
  children: ReactNode
}

export function InputRoot({ label, className, children }: InputRootProps) {
  return (
    <div
      className={twMerge(
        'text-sm focus-within:border-slate-200 py-3 px-4 relative border-slate-200/50 transition-all border rounded w-full',
        className,
      )}
    >
      <label
        htmlFor={label}
        className="font-medium text-sm absolute top-0 -translate-y-1/2 bg-violet-950 px-2"
      >
        {label}
      </label>
      {children}
    </div>
  )
}