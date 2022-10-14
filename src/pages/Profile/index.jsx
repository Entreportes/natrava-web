import { Icon, Card } from "../../components"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {useLocalStorage, useAsyncFn} from 'react-use'
import axios from 'axios'
import {addDays, subDays, format, formatISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { useState } from "react"
import { useEffect } from "react"


export const Profile = () => {

    const params = useParams()
        
    
    const [auth, setAuth] = useLocalStorage('auth',{})
    const navigate = useNavigate()
    const logout = () => {
        setAuth({})
        navigate('/')
    }


    const [currentDate, setDate] = useState(formatISO(new Date(2022,10,20)))
    const prevDay = () =>{
        const nextDate = subDays(new Date(currentDate),1)
        setDate(nextDate)
        console.log(currentDate)
    }    
    const nextDay = () =>{
        const nextDate = addDays(new Date(currentDate),1)
        setDate(nextDate)
        console.log(currentDate)
    }
    const [hunches,fetchHunches] = useAsyncFn( async () => {
        const response = await axios({
            method: 'get',
            baseURL: import.meta.env.VITE_API_URL,
            url: `/${params.username}`,
            
        })
        console.log(response.data.name)
        const name_usuario = response.data.name
        console.log(name_usuario)
        const hunches = response.data.hunches.reduce((acc, hunch) => {
            acc[hunch.gameId] = hunch
            return acc
        },{})
        return {
            name: response.data.name,
            hunches
        }
    }) 

    const [games, fetchGames] = useAsyncFn( async (params) => {
        const response = await axios({
            method: 'get',
            baseURL: import.meta.env.VITE_API_URL,
            url: "/games",
            params
        })
        return response.data
    })

    
    useEffect(() =>{
        fetchGames({gameTime: currentDate})
        fetchHunches()
    }, [currentDate])

    const isLoading = games.loading || hunches.loading
    const hasError = games.error || hunches.error
    const isDone = !isLoading && !hasError

    return (
        <div>
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between">
                    <img src="/imgs/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
                    {auth?.user?.id && (
                        <div onClick={logout} className="p-2 cursor-pointer">
                            Sair
                        </div>
                    )}
                </div>
            </header><main className="space-y-6">

                <section id="header" className="bg-red-500 text-white p-4">
                    <div className="container max-w-3xl space-y-2">
                        <a href="/dashboard">
                            <Icon name="back" className="w-10" />
                        </a>
                        <h3 className="text-2xl font-bold">{hunches?.value?.name? hunches.value.name : '...'}</h3>

                    </div>
                </section>
                <section id="content" className="container max-w-3xl p-4 space-y-4">
                    <h2 className="text-red-500 text-xl font-bold">Palpites:</h2>
                    <div className="flex space-x-4 items-center justify-center">
                        <Icon name="arrowLeft" className="w-6" onClick={prevDay}/>
                        <span className="font-bold">{format(new Date(currentDate),"d 'de' MMMM", {locale:ptBR})}</span>
                        <Icon name="arrowRight" className="w-6" onClick={nextDay}/>
                    </div>
    

                    <div className="space-y-4">
                        {isLoading && 'Carregando jogos...'}
                        {hasError && 'deu merda, sorry...'}
                        {isDone && games.value?.map(game => (
                             <Card
                                key={game.id}
                                gameId={game.id}
                                homeTeam={game.homeTeam}
                                awayTeam={game.awayTeam}
                                gameTime={format(new Date(game.gameTime), "H':'mm")}
                                homeTeamScore={hunches?.value?.hunches?.[game.id]?.homeTeamScore || ''}
                                awayTeamScore={hunches?.value?.hunches?.[game.id]?.awayTeamScore || ''}
                                disabled = {true}
                            
                            />
                        ))}
                       
                    </div>

                </section>


            </main>

        </div>


    )
       
}