
export type StatusType = 'emEstoque' | 'semEstoque' | 'emTransito'

export type Motorcycle = {
  code: string
  model: string
  color: string
  value: number
  status: StatusType
  id: string
}