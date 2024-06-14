
export function ErrorPage(){
  return(
    <div className="flex gap-4 flex-col items-center justify-center h-screen ">
      <h1 className="text-blue-500 text-9xl">404</h1>
      <h2 className="text-2xl text-slate-200">Página não encontrada!</h2>
      <span className="text-slate-400">Não foi possível encontrar a página, por favor clique no botão abaixo para ser redirecionado para a homepage.</span>
      <a href="/" className="bg-blue-400 hover:bg-blue-500 transition-colors text-white font-semibold flex py-3 px-10 items-center gap-2 rounded">
        Página inicial
      </a>
    </div>
  )
}