import { MagnifyingGlass } from "@phosphor-icons/react"
import { Item } from "../components/Item"

export function Home() {

  return (
    <div>
      <div className="mx-14">
        <div className="border-b pb-5 border-slate-300/50 text-slate-300 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="font-semibold text-2xl ">Tabela de Motos</h1>
          <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 mt-6 lg:mt-0">
            <div className="border rounded border-slate-300/50 flex items-center gap-3 py-3 px-4">
              <MagnifyingGlass size={14} />
              <input
                className="w-80 bg-transparent text-xs outline-none"
                type="text"
                placeholder="Buscar por código, nome e cor"
              />
            </div>
            <a href="/register" className=" justify-center bg-blue-400 hover:bg-blue-500 transition-colors text-white font-semibold text-xs flex py-3 px-4 items-center gap-2 rounded">
              <img src="/plus.svg" alt="" />
              NOVO REGISTRO
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}


