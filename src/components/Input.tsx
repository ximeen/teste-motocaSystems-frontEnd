import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  label: string
  className?: string
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, className, ...rest }: InputProps,
  ref,
) {
  return (
    <div className="focus-within:border-slate-200 py-3 px-4 relative border-slate-200/50 border rounded w-full">
      <label
        htmlFor={label}
        className="font-medium text-sm absolute top-0 -translate-y-1/2 bg-violet-950 px-2"
      >
        {label}
      </label>
      <input
        className={twMerge('bg-transparent outline-none w-full', className)}
        id={label}
        {...rest}
        ref={ref}
      />
    </div>
  )
})