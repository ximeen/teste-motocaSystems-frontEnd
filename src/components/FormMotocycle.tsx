import { z } from "zod";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./Button";
import { ArrowCircleUp, CircleNotch } from "@phosphor-icons/react";
import { useEffect } from "react";
import { formatNumberToCurrencyBRL } from "../utils/FormatNumberToBRL";
import { Motorcycle } from "../types/MotorcycleTypes";

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
  status: z.string({message: "Digite um status válido."}).refine((value) => {
    return statusValues.includes(value as Status)
  }),
})

export type RegisterMotorcycleFormSchema = z.infer<typeof RegisterMotorcycleFormSchema>

interface FormMotorcycleProps {
  isPending?: boolean,
  isSuccess?: boolean,
  isEdit?: boolean
  motorcycle?: Motorcycle
  handleSubmitForm: (data: RegisterMotorcycleFormSchema) => void
}

export function FormMotocycle({ handleSubmitForm, isPending, isSuccess, isEdit, motorcycle}: FormMotorcycleProps){
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
  const MOTORCYCLE_EXISTS = !!motorcycle?.code

  const { handleSubmit, register, formState: { errors }, control, reset, setValue } = useForm<RegisterMotorcycleFormSchema>({
    resolver: zodResolver(RegisterMotorcycleFormSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      code: motorcycle?.code.replace('#', ''),
      color: motorcycle?.color,
      model: motorcycle?.model,
      status: motorcycle?.status,
      value: motorcycle?.value
        ? formatNumberToCurrencyBRL(motorcycle.value / 100)
        : undefined,
    },
  })

  function formatCurrency(value: string) {
    const convertNum = value.replace(/\D/g, '')
    const numberValue = Number(convertNum) / 100

    const formattedNumber = formatNumberToCurrencyBRL(numberValue)
    return formattedNumber;
  }

  useEffect(()=> {
    if(isSuccess) reset({
      code: "",
      color: "",
      model: "",
      status: "",
    })
  } ,[isSuccess, reset])

  return(
    <form
    className="w-full lg:w-[26rem] mt-9 flex flex-col mx-auto items-center gap-9"
    onSubmit={handleSubmit(handleSubmitForm)}
  >
    <div className='w-full'>
    <Input.Root label="Código" className={`${MOTORCYCLE_EXISTS ? 'border-slate-300/50 text-slate-300/50' : ''} flex gap-1`} >
      <span className="text-slate-200/50">#</span>
      <Input.Content
        disabled={MOTORCYCLE_EXISTS}
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
    {isEdit ? (
          isPending ? <CircleNotch className="animate-spin w-12" /> :
          <>
            <ArrowCircleUp size={20} weight="bold" />
            ATUALIZAR
          </>
        ) : (
          isPending ? <CircleNotch className="animate-spin w-12" /> :
          <>
            <img src='plus.svg'  />
            REGISTRAR
          </>
        )}
    </Button>
  </form>
  )
}

