import { api } from '../lib/axios'
import { Motorcycle } from '../types/MotorcycleTypes'

const SECONDS_IN_MILISECONDS = 1000

export async function deleteMotorcycle(id: string) {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  await delay(SECONDS_IN_MILISECONDS)

  const response = await api.delete<Motorcycle>(`motorcycles/${id}`)
  return response.data
}