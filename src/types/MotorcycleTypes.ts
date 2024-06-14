export type Motorcycle = {
  code: string
  model: string
  color: string
  value: number
  status: 'emEstoque' | 'semEstoque' | 'emTransito'
  id: string
}