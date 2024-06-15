import { useMutation, useQuery } from '@tanstack/react-query'
import {
  FormMotocycle,
  RegisterMotorcycleFormSchema,
} from '../components/FormMotocycle'
import { StatusType } from '../types/MotorcycleTypes'
import { getMotorcycles } from '../api/GetMotorcycle'
import { updateMotorcycles  } from '../api/UpdateMotocycle'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export function EditMotorcycle() {
  const navigate = useNavigate()
  const { id } = useParams()

  const { mutateAsync: updateMotorcyclesMutate } = useMutation({
    mutationKey: ['motorcycle'],
    mutationFn: updateMotorcycles,
  })

  const { data: motorcycles } = useQuery({
    queryKey: ['motorcycles'],
    queryFn: getMotorcycles,
  })

  async function handleForm(data: RegisterMotorcycleFormSchema) {
    if (!motorcycles) {
      return
    }

    try {
      await updateMotorcyclesMutate({
        id: id!,
        data: {
          color: data.color,
          model: data.model,
          status: data.status as StatusType,
          value: parseFloat(data.value),
        },
      })

      toast.success('Moto atualizada com sucesso!')
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  
  const motorcycle = motorcycles?.find((motorcycle) => motorcycle.id === id)
  console.log(motorcycle);

  return (
    <div className="mx-14">
      <div className="border-b pb-5 border-slate-300/50 text-slate-200">
        <h1 className="font-semibold text-2xl">Registro de Motos</h1>
      </div>

      <div className="mt-16 flex flex-col gap-6 text-slate-200">
        <h2 className="text-center font-semibold text-2xl">
          Preencha as informações a baixo para registrar uma Moto 🏍️
        </h2>
        {motorcycle && (
          <FormMotocycle
            handleSubmitForm={handleForm}
            motorcycle={motorcycle}
            isEdit={true}
          />
        )}
      </div>
    </div>
  )
}