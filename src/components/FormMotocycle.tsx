import { useState } from "react";

export function FormMotocycle(){
  const [value, setValue] = useState('');

  const formatCurrency = (value: string) => {
    // Removendo caracteres que não são números
    const numericValue = value.replace(/[^\d]/g, '');

    if (numericValue.length === 0) return '';

    // Adicionando zeros à esquerda se necessário
    const paddedValue = numericValue.padStart(3, '0');
    
    // Separando os centavos
    const integerPart = paddedValue.slice(0, -2);
    const fractionalPart = paddedValue.slice(-2);

    // Convertendo para número e formatando como moeda
    const numberValue = parseFloat(`${integerPart}.${fractionalPart}`);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numberValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Remover caracteres não numéricos
    inputValue = inputValue.replace(/[^\d]/g, '');

    setValue(inputValue);
  };

  return(
    <form action="" className="lg:w-1/5 w-full flex flex-col gap-6">

        <div className="border border-slate-200/60 border-solid rounded-md p-3 relative">
        <label htmlFor="code" className="absolute -top-4 left-3 bg-violet-950 p-1 text-slate-200 text-sm">Código</label>
          <div className="flex gap-2">
            <span className="text-slate-200 text-sm">#</span>
            <input 
            id="code"  
            className="border-none outline-none bg-transparent text-slate-200 w-full cursor-pointer" 
            />
          </div>
        </div>

        <div className="border border-slate-200/60 border-solid rounded-md p-3 relative">
        <label htmlFor="code" className="absolute -top-4 left-3 bg-violet-950 p-1 text-slate-200 text-sm">Modelo da moto</label>
            <input id="code"  className="border-none outline-none bg-transparent text-slate-200 w-full cursor-pointer" />
        </div>

        <div className="border border-slate-200/60 border-solid rounded-md p-3 relative">
        <label htmlFor="code" className="absolute -top-4 left-3 bg-violet-950 p-1 text-slate-200 text-sm">Cor</label>
            <input id="code"  className="border-none outline-none bg-transparent text-slate-200 w-full cursor-pointer" />
        </div>

        <div className="border border-slate-200/60 border-solid rounded-md p-3 relative">
        <label htmlFor="code" className="absolute -top-4 left-3 bg-violet-950 p-1 text-slate-200 text-sm">Valor</label>
          <div className="flex gap-2">
            <input 
              id="code"  
              className="border-none outline-none bg-transparent text-slate-200 w-full cursor-pointer" 
              value={value} 
              onChange={handleChange} 
              onBlur={() => setValue(formatCurrency(value))}
              />
          </div>
        </div>

        <div className="border border-slate-200/60 border-solid rounded-md p-3 relative">
        <label htmlFor="code" className="absolute -top-4 left-3 bg-violet-950 p-1 text-slate-200 text-sm">Status</label>
            <input id="code" type=""  className="border-none outline-none bg-transparent text-slate-200 w-full cursor-pointer" />
        </div>

        <button  
          className=" justify-center bg-blue-400 hover:bg-blue-500 transition-colors text-white font-semibold text-xs flex py-3 px-4 items-center gap-2 rounded uppercase ">
              <img src="/up.svg" alt="" />
              Atualizar
        </button>
    </form>
  )
}