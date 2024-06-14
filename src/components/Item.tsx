import { TrashSimple } from '@phosphor-icons/react'

export function Item() {
  return (
    <div className="lg:font-medium bg-violet-900 rounded-lg lg:px-14 py-6 flex flex-col lg:flex-row justify-between items-center hover:bg-violet-900/80">
      <div className='flex flex-col lg:flex-row justify-center lg:items-center'>
        <span className="mr-24 text-violet-500">#0001</span>

        <div className="text-slate-200 flex flex-col gap-3 flex-1">
          <div className="flex gap-3 items-center">
            <h2 className="font-semibold lg:text-lg ">Honda POP 110I</h2>
            <span className="text-xs px-3 leading-7 rounded-full text-green-500 bg-green-900/40">
              Em estoque
            </span>
          </div>
          <span className="block">Valor: R$ 15.000,00</span>
          <span>Cor: <strong className='uppercase font-normal'>Branca</strong></span>
        </div>
      </div>
      <div className="flex gap-4 items-center w-full justify-around lg:w-auto mt-6 lg:mt-0">
        <TrashSimple size={30} className="text-red-500 hover:bg-red-500/30 rounded-full p-1 cursor-pointer" weight="bold" />
        <a href="/edit">
          <img src="/eye.svg" alt="" className="text-slate-200 hover:bg-slate-200/30 rounded-full p-1 cursor-pointer "/>
        </a>
      </div>
    </div>
  )
}