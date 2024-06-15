import { CaretDown } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'

interface SelectInputProps {
  items: {
    name: string
    value: string
  }[]
  value: string
  onChange: (value: string) => void
}

export function InputSelect({ items, value, onChange }: SelectInputProps) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="text-sm h-5 relative flex justify-between items-center w-full outline-none">
        <Select.Value />
        <Select.Icon>
          <CaretDown size={14} weight="fill" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={14}>
          {items.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              className="text-sm cursor-pointer hover:bg-violet-800 text-slate-200 transition-colors flex justify-between items-center outline-none bg-violet-900 p-2 w-full"
            >
              <Select.ItemText>{item.name}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}