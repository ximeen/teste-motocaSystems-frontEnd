import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  className?: string
}

export default forwardRef<HTMLInputElement, InputProps>(function InputContent(
  { className, ...rest }: InputProps,
  ref,
) {
  return (
    <input
      className={twMerge('bg-transparent outline-none w-full', className)}
      {...rest}
      ref={ref}
    />
  )
})