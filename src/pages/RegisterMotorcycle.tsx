import { v4 as uuidv4 } from 'uuid';
import { postMotorcycles } from '../api/PostMotocycle'
import { StatusType } from '../types/MotorcycleTypes'
import { FormMotocycle, RegisterMotorcycleFormSchema } from '../components/FormMotocycle';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getMotorcycles } from '../api/GetMotorcycle';
import { CircleNotch } from '@phosphor-icons/react';

export function RegisterMotorcycle() {
  const { mutateAsync: postMotorcycleMutate, isSuccess, isPending } = useMutation({
    mutationKey: ['motorcycle'],
    mutationFn: postMotorcycles,
  })
  const { data: motorcycles } = useQuery({
    queryKey: ['motorcycle'],
    queryFn: getMotorcycles,
  })

  async function handleSubmitForm(data: RegisterMotorcycleFormSchema) {
    if (!motorcycles) {
      return (
        <div className="flex items-center justify-center flex-1 flex-col">
          <CircleNotch className="animate-spin w-20 h-20 text-slate-200"/>
        </div>
      )
    }

    const motorcycleCodes = motorcycles.map((motorcycle) => motorcycle.code)
    const codeAlreadyExists = motorcycleCodes.includes(data.code)

    if (codeAlreadyExists) {
      toast.error('Já existe uma moto com esse código. Por favor, tente outro.')
      return
    }

    try {
      await postMotorcycleMutate({
        code: data.code,
        color: data.color,
        model: data.model,
        status: data.status as StatusType,
        value: parseFloat(data.value),
        id: uuidv4(),
      })
      toast.success('Moto registrada com sucesso!')
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

        <FormMotocycle handleSubmitForm={handleSubmitForm} isPending = {isPending} isSuccess = {isSuccess}/>
      </div>
    </div>
  )
}