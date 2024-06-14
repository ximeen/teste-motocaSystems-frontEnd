import { FormMotocycle } from "../components/FormMotocycle";

 export function RegisterMotorcycle(){
  return(
    <div className="mx-14">
      <div className="border-b pb-5 border-slate-300/50 flex justify-between items-center">
        <h1 className="font-semibold text-2xl text-slate-200">Registro de Motos</h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-slate-200 lg:text-2xl text-xl mb-10">Preencha as informações a baixo para registrar uma Moto 🏍️</h1>
        <FormMotocycle />
      </div>
    </div>
  )
 }