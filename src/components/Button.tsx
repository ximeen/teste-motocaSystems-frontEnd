import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'> & {
  className?: string
  children?: ReactNode
}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'justify-center bg-blue-400 hover:bg-blue-500 transition-colors text-white font-semibold text-xs flex py-3 px-4 items-center gap-2 rounded',
        className,
      )}
    >
      {children}
    </button>
  )
}