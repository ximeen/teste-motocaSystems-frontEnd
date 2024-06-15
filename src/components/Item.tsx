import { CircleNotch, TrashSimple } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import { Motorcycle } from '../types/MotorcycleTypes'
import { queryClient } from '../lib/queryClient'
import { tv } from 'tailwind-variants'
import { deleteMotorcycle } from '../api/DeleteMotorcycle'
import { Link } from 'react-router-dom'
import { formatNumberToCurrencyBRL } from '../utils/FormatNumberToBRL'


interface ItemProps{
  motorcycle: Motorcycle
}

export function Item({ motorcycle }: ItemProps) {

  const { mutateAsync: deleteMotorcycleMutation, isPending } = useMutation({
    mutationKey: ['motorcycle'],
    mutationFn: deleteMotorcycle,
    onSuccess: () => {
      queryClient.setQueryData<Motorcycle[]>(['motorcycles'], (oldData) => {
        const newData = oldData?.filter(({ id }) => id !== motorcycle.id)
        return newData
      })
    },
  })

  async function handleDeleteMotorcycle() {
    try {
      await deleteMotorcycleMutation(motorcycle.id)
    } catch (err) {
      console.error(err)
    }
  }

  const statusStyle = tv({
    base: 'px-3 leading-7 rounded-full text-sm whitespace-nowrap',
    variants: {
      color: {
        emEstoque: 'text-green-500 bg-green-900',
        semEstoque: 'text-red-500 bg-red-900',
        emTransito: 'text-yellow-500 bg-yellow-900',
      },
    },
  })

  const formattedStatus = {
    emEstoque: 'Em estoque',
    semEstoque: 'Sem estoque',
    emTransito: 'Em trânsito',
  }

  const formattedValue = formatNumberToCurrencyBRL((motorcycle.value / 100))

  return (
    <div className="lg:font-medium bg-violet-900 rounded-lg px-6 lg:px-14 py-6 flex flex-col lg:flex-row justify-between  hover:bg-violet-900/80">
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <span className="mr-24 text-violet-500">{motorcycle.code}</span>

        <div className="text-slate-200 flex flex-col gap-3 flex-1">
          <div className="flex gap-3 items-center justify-between">
            <h2 className="font-semibold lg:text-lg ">{motorcycle.model}</h2>
            <span className={statusStyle({ color: motorcycle.status })}>
            {formattedStatus[motorcycle.status]}
          </span>
          </div>
          <span className=" text-sm">Valor: {formattedValue}</span>
          <span>Cor: <strong className='uppercase font-normal text-sm'>{motorcycle.color}</strong></span>
        </div>
      </div>
      <div className="flex gap-4 items-center w-full justify-around lg:w-auto mt-6 lg:mt-0">
      {isPending ? (
          <CircleNotch
            size={20}
            className="animate-spin text-red-500 transition-colors cursor-pointer"
            weight="bold"
          />
        ) : (
          <TrashSimple
            size={28}
            className="text-red-500  transition-colors hover:bg-red-500/30 p-1 rounded-full cursor-pointer"
            weight="bold"
            onClick={handleDeleteMotorcycle}
          />
        )}

        <Link to={`/edit/${motorcycle.id}`}>
          <img src="/eye.svg" alt="" className="text-slate-200 hover:bg-slate-200/30 rounded-full p-1 cursor-pointer "/>
        </Link>
      </div>
    </div>
  )
}