import React from 'react'
import { CityItem } from '../CityItem'
import { SideBarWrapper, ScrollBar } from './styles'

export const SideBar = ({setSelectedCity,setIndex, isOpen, cityData }) => {
    return (
        <SideBarWrapper
            transition={{stiffness:50, type:'spring'}}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: isOpen ? 0 : -300, opacity: 1 }}>
         
            <ScrollBar >
                {
                    Object.keys(cityData).map((city, index) =>
                        <CityItem
                            key={city}
                            index={index}
                            city={city}
                            data={cityData[city]}
                            setSelectedCity={setSelectedCity}
                            setIndex={setIndex}
                        />)
                }
            </ScrollBar>
        </SideBarWrapper>
    )
}
