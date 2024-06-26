export function formatNumberToCurrencyBRL(value: number) {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedValue
}