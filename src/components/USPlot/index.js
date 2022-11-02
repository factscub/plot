import { useState } from 'react'
import temps from '../../Data/temperatures.json'
import { getCityData, getCityNames } from '../../Utils'
import { SideBar } from '../SideBar'
import { Header } from '../Header'
import { PlotContainer } from '../PlotContainer'

export const USPlot = () => {

    const [selectedCity, setSelectedCity] = useState('Albany')
    const [index, setIndex] = useState(0)
    const [temperatures] = useState(temps)
    const [cityNames] = useState(getCityNames({ temperatures }))
    const [cityData] = useState(getCityData({ cityNames, temperatures }))
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <PlotContainer index={index} selectedCity={selectedCity} isOpen={isOpen} cityData={cityData} />

            {
                <SideBar setIndex={setIndex} setSelectedCity={setSelectedCity} isOpen={isOpen} cityData={cityData} />
            }
        </>
    )
}
