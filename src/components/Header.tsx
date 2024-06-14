import { House } from "@phosphor-icons/react";


export function Header(){
  return (
    <header className="flex justify-end gap-4 items-center py-7 px-11">
    <a href="/">
      <House weight="fill" size={32} className="text-slate-300 hover:text-blue-400 transition-all" />
    </a> 
    <div className="flex relative">
      <img
        className="w-11 aspect-square rounded-full hover:opacity-85 cursor-pointer"
        src="/avatar.png"
        alt="Foto de perfil"
      />
      <div className="w-3 h-3 rounded-full absolute bg-green-500 bottom-0 right-1 border-2 border-solid border-gray-700"/>
    </div>
  </header>
  )
}