
import { Navigate } from 'react-router-dom'
import {useLocalStorage} from 'react-use'

export function Home() {
    
  const [auth] = useLocalStorage('auth',{})

  if(auth?.user?.id){
      return <Navigate to ="/dashboard" replace={true}/>
  }
  return (
    <div className=" bg-red-700  text-white p-4 flex flex-col items-center space-y-6">
      <header className="container max-w-5xl flex justify-center p-4">
        <img src="/imgs/logo-fundo-vermelho.svg" className="w-40"/>

      </header>
      <div className="container   flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex  justify-center">
          <img src="/imgs/photo2.png" className="w-full  max-w-md"/>
        </div>



        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center font-bold md:text-left">
            Dê o seu palpite na Copa do Mundo Catar 2022!
          </h1>

          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </a>  
          <a href="/login" className="text-center text-white bg-red-700 border border-white text-xl px-8 py-4 rounded-xl">
            Login
          </a>
        </div>




      </div>
    </div>
  )
}

