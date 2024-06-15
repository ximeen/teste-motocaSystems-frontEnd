import { Button } from '../components/Button'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../components/Input'
import { postMotorcycles } from '../api/PostMotocycle'
import { StatusType } from '../types/MotorcycleTypes'

const statusValues = ['emTransito', 'semEstoque', 'emEstoque'] as const
type Status = (typeof statusValues)[number]

const RegisterMotorcycleFormSchema = z.object({
  code: z
    .string()
    .length(4, 'O código precisa possuir no mínimo 4 números.').transform((value) => `#${value}`),
  model: z.string().min(1, {message: "Digite um modelo válido."}).toUpperCase(),
  color: z.string().min(1, {message: "Digite uma cor válida."}).toUpperCase(),
  value: z.string({message: "Digite um valor válido"}).transform((value) => {
    return value.replace(/[^\d,.-]/g, '').replace(',', '').replace('.', '');
  }),
  status: z.string().refine((value) => {
    return statusValues.includes(value as Status)
  }, {message: "Digite um status válido."}),
})

type RegisterMotorcycleFormSchema = z.infer<typeof RegisterMotorcycleFormSchema>

export function RegisterMotorcycle() {
  const items = [
    {
      name: 'Sem estoque',
      value: 'semEstoque',
    },
    {
      name: 'Em estoque',
      value: 'emEstoque',
    },
    {
      name: 'Em trânsito',
      value: 'emTransito',
    },
  ]

  const { handleSubmit, register, formState: { errors }, control, setValue } = useForm<RegisterMotorcycleFormSchema>({
    resolver: zodResolver(RegisterMotorcycleFormSchema),
    criteriaMode: 'all',
    mode: 'all'
  })

  function formatCurrency(value: string) {
    const convertNum = value.replace(/\D/g, '')
    const numberValue = Number(convertNum) / 100

    const formattedNumber = numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    return formattedNumber;
  }

  async function handleSubmitForm(data: RegisterMotorcycleFormSchema) {

    try {
      await postMotorcycles({
        code: data.code,
        color: data.color,
        model: data.model,
        status: data.status as StatusType,
        value: parseFloat(data.value),
        id: uuidv4(),
      })
      console.log("Deuuu certo")
    } catch (err) {
      console.error(err)
    }
    
    
  }

  return (
    <div className="mx-14">
      <div className="border-b pb-5 border-slate-300/50 text-slate-200">
        <h1 className="font-semibold text-2xl">Registro de Motos</h1>
      </div>

      <div className="mt-16 flex flex-col gap-6 text-slate-200">
        <h2 className="text-center font-semibold text-2xl">
          Preencha as informações a baixo para registrar uma Moto 🏍️
        </h2>
        <form
          className="w-full lg:w-[26rem] mt-9 flex flex-col mx-auto items-center gap-9"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className='w-full'>
          <Input.Root label="Código" className="flex gap-1">
            <span className="text-slate-200/50">#</span>
            <Input.Content
              {...register('code')}
              onChange={(e) =>
                setValue('code', e.target.value.replace(/\D/g, ''))
              }
              maxLength={4}
            />
          </Input.Root>
            {errors.code && (
              <span className="text-sm text-rose-500">
                {errors.code.message}
              </span>
            )}
          </div>

          <div className='w-full'>
          <Input.Root label="Modelo da Moto">
            <Input.Content className="uppercase" {...register('model')} />
          </Input.Root>
            {errors.model && (
              <span className="text-sm text-rose-500">
                {errors.model.message}
              </span>
            )}
          </div>

          <div className='w-full'>
          <Input.Root label="Cor">
            <Input.Content className="uppercase" {...register('color')} />
          </Input.Root>
            {errors.color && (
              <span className="text-sm text-rose-500">
                {errors.color.message}
              </span>
            )}
        </div>

        <div className='w-full'>
        <Input.Root label="Valor">
            <Controller
              control={control}
              name="value"
              defaultValue="R$ 0,00"
              render={({ field }) => (
                <Input.Content
                  type="text"
                  value={field.value}
                  onChange={(e) =>
                    field.onChange(formatCurrency(e.target.value))
                  }
                />
              )}
            />
          </Input.Root>
            {errors.value && (
              <span className="text-sm text-rose-500">
                {errors.value.message}
              </span>
            )}
          </div>

          <div className='w-full'>
          <Input.Root label="Status">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Input.Select
                  items={items}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </Input.Root>
            {errors.status && (
              <span className="text-sm text-rose-500">
                {errors.status.message}
              </span>
            )}
          </div>  
          <Button className="w-full flex justify-center items-center gap-2 ">
            <img src='plus.svg'  />
            REGISTRAR
          </Button>
        </form>
      </div>
    </div>
  )
}