import { MagnifyingGlass } from "@phosphor-icons/react"
import { Item } from "../components/Item"
import { getMotorcycles } from "../api/GetMotorcycle"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"

export function Home() {
  const [search, setSearch] = useState("")

  const { data: motorcycles } = useQuery({
    queryKey: ['motorcycles'],
    queryFn: getMotorcycles,
  })

  if (!motorcycles) {
    return
  }

    const filteredMotorcycles = motorcycles.filter((motorcycle) => {
    const searchUpper = search.toUpperCase()

    const code = motorcycle.code.includes(searchUpper)
    const color = motorcycle.color.includes(searchUpper)
    const name = motorcycle.model.includes(searchUpper)

    const motorcycleFound = code || color || name

    return motorcycleFound
  })

  const motorcyclesList = search.length > 0 ? filteredMotorcycles : motorcycles


  return (
    <div>
      <div className="mx-7 lg:mx-14">
        <div className="border-b pb-5 border-slate-300/50 text-slate-300 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="font-semibold text-2xl ">Tabela de Motos</h1>
          <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 mt-6 lg:mt-0">
            <div className="border rounded border-slate-300/50 flex items-center gap-3 py-3 px-4">
              <MagnifyingGlass size={14} />
              <input
                className="w-80 bg-transparent text-xs outline-none"
                placeholder="Buscar por código, nome e cor"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to={"/register"}>
              <Button className="w-full">
                <img src="/plus.svg" alt="" />
                NOVO REGISTRO
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          {motorcyclesList.map((motorcycle) => (
            <Item key={motorcycle.id} motorcycle={motorcycle}/>
          ))}
        </div>
      </div>
    </div>
  )
}


