import { api } from '../lib/axios'
import { Motorcycle } from '../types/MotorcycleTypes'

export async function getMotorcycles() {
  const response = await api.get<Motorcycle[]>('motorcycles')

  return response.data
}