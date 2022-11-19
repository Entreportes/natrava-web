

export function Regras() {

  return (
    <view className='flex-1 bg-black'>
      <div className="h-screen bg-black  text-white p-4 flex flex-col items-center space-y-4">
        <header className="container max-w-5xl flex justify-center p-4">
          <img src="/imgs/icon512x512.png" className="w-40"/>

        </header>
        <div className="container   flex-1 p-4 flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">

          <div className="md:flex-1 flex  justify-center">
            <img src="/imgs/photo2.png" className="w-[85%]  max-w-md"/>
          </div>



          <div className="md:flex-1 flex flex-col space-y-4">
            <h1 className="text-2xl text-center font-bold md:text-left md:text-3xl">
              Regras
            </h1>

            
            <h2 className="text-lg text-center font-bold md:text-left md:text-3xl">
              Acertou o placar:      5 pontos{'\n'}
              Acertou empate:        3 pontos{'\n'}
              Acertou time vencedor: 2 pontos{'\n'}
              Se acertou o placar de algum time +1 ponto
            </h2>
            <h2 className="text-lg text-center font-bold md:text-left md:text-3xl">
                Serão coletas apenas as informações de NOME, E-MAIL, ID do Google e FOTO DO PERFIL na conta Google. Serão armezanados em nosso servidor apenas as informações disponibilizadas pelo login social 
                    nenhuma informação será compartilhada. Essas informações são essenciais para saber quem é o usuário que estará dando os palpites.
                
            </h2>
          </div>




        </div>
      </div>
    </view>
  )
}

