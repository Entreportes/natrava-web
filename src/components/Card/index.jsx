import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({   
    homeTeamScore:yup.string().required(),
    awayTeamScore:yup.string().required()
})


export const Card = ({disabled, gameId, homeTeam, awayTeam, gameTime, homeTeamScore, awayTeamScore}) => {

    const [auth] = useLocalStorage('auth')

    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method:'post',
                baseURL:import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data:{
                    ...values,
                    gameId,
                }
            })
        },
        initialValues:{
            homeTeamScore,
            awayTeamScore
        },
        validationSchema
    })
    return(
        <div className="rounded-xl border border-gray-300 text-center p-4 space-y-4">
            <span className="text-xs md:text-base text-gray-700 font-bold"> {gameTime}</span>
            <form className="flex space-x-3 justify-center items-center font-bold ">

                <span className="uppercase text-right">{homeTeam}</span>
                <img src={`/imgs/flags/${homeTeam}.png`}/>

                <input 
                    type="number"
                    name="homeTeamScore"
                    className="bg-red-300/[0.2] w-[52px] h-[52px] text-red-700 text-xl text-center" 
                    value={String(formik.values.homeTeamScore)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />
                <span className="text-red-500 ">x</span>
                <input 
                    type="number" 
                    name="awayTeamScore"
                    className="bg-red-300/[0.2] w-[52px] h-[52px] text-red-700 text-xl text-center " 
                    value={String(formik.values.awayTeamScore)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleSubmit}
                    disabled={disabled}
                />

                <img src={`/imgs/flags/${awayTeam}.png`} />
                <span className="uppercase text-left">{awayTeam}</span>

            </form>
        </div>
    )
}