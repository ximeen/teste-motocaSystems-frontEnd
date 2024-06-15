import { Button } from '../components/Button'
import Input from '../components/Input'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const statusValues = ['emTransito', 'semEstoque', 'emEstoque'] as const
type Status = (typeof statusValues)[number]

const RegisterMotorcycleFormSchema = z.object({
  code: z
    .string()
    .startsWith('#', {message: "O código precisa ter o #."})
    .length(5, 'O código precisa possuir no mínimo 4 números.'),
  model: z.string().min(1, {message: "Digite um modelo válido."}).toUpperCase(),
  color: z.string().min(1, {message: "Digite uma cor válida."}).toUpperCase(),
  value: z.string({message: "Digite um valor válido"}).transform((e) => {
    return e.replace(/[^\d,.-]/g, '').replace(',', '').replace('.', '');
  }),
  status: z.string().refine((value) => {
    return statusValues.includes(value as Status)
  }, {message: "Digite um status válido."}),
})

type RegisterMotorcycleFormSchema = z.infer<typeof RegisterMotorcycleFormSchema>

export function RegisterMotorcycle() {

  const { handleSubmit, register, formState: { errors }, control } = useForm<RegisterMotorcycleFormSchema>({
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

  function handleSubmitForm(data: RegisterMotorcycleFormSchema) {

    console.log(data)
    console.log(parseFloat(data.value));
    
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
          className="w-[26rem] mt-9 flex flex-col mx-auto items-center gap-9"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input label="Código" defaultValue="#" {...register('code')} />
          {errors.code && (
            <span className="text-sm text-rose-500">
              {errors.code.message}
            </span>
          )}

          <Input
            className="uppercase"
            label="Modelo da Moto"
            {...register('model')}
          />
           {errors.model && (
            <span className="text-sm text-rose-500">
              {errors.model.message}
            </span>
          )}

          <Input className="uppercase" label="Cor" {...register('color')} />
          {errors.color && (
            <span className="text-sm text-rose-500">
              {errors.color.message}
            </span>
          )}

          <Controller defaultValue={"R$ 00,00"} control={control} name='value' render={({field})=> (
              <Input
                label="Valor"
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(formatCurrency(e.target.value))}
              />                        
          )}/>
           {errors.value && (
            <span className="text-sm text-rose-500">
              {errors.value.message}
            </span>
          )}

          <Input label="Status" {...register('status')} />
          {errors.status && (
            <span className="text-sm text-rose-500">
              {errors.status.message}
            </span>
          )}

          <Button className="w-full flex justify-center items-center gap-3">
            <img src='plus.svg'  />
            REGISTRAR
          </Button>
        </form>
      </div>
    </div>
  )
}