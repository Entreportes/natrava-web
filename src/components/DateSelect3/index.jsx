import { useState } from "react"
import {addDays, subDays, format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { Icon } from "../Icon"


export const DateSelect3 = () => {
    const [currentDate, setCurrentDate] = useState(new Date("2022-11-22T00:00:00Z"))

    const prevDay = () =>{
        const nextDate = subDays(currentDate,1)
        setCurrentDate(nextDate)
    }
    
    const nextDay = () =>{
        const nextDate = addDays(currentDate,1)
        setCurrentDate(nextDate)
    }

    return(
        <div className="flex space-x-4 items-center justify-center">
            <Icon name="arrowLeft" className="w-6" onClick={prevDay}/>
            <span className="font-bold">{format(new Date(currentDate),"d 'de' MMMM", {locale:ptBR})}</span>
            <Icon name="arrowRight" className="w-6" onClick={nextDay}/>
        </div>
    )

}