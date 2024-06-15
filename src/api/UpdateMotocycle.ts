import { api } from '../lib/axios'
import { Motorcycle, StatusType } from '../types/MotorcycleTypes'

interface bodySchema {
  id: string
  data: {
    model: string
    color: string
    value: number
    status: StatusType
  }
}

export async function updateMotorcycles({ id, data }: bodySchema) {
  const response = await api.patch<Motorcycle[]>(`motorcycles/${id}`, data)

  return response.data
}