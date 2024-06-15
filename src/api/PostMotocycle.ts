import { api } from '../lib/axios'
import { Motorcycle } from '../types/MotorcycleTypes'

export async function postMotorcycles(data: Motorcycle) {
  const response = await api.post<Motorcycle[]>('motorcycles', data)

  return response.data
}