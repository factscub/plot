import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { getColor } from '../../Utils'
import { MiniPlot } from '../MiniPlot'
import { CityItemWrapper, Heading } from './styles'

export const CityItem = ({ setIndex, setSelectedCity, index, city, data }) => {
  const [isChecked, setIsChecked] = useState(false)
  const inputRef = useRef()
  const dark = '#00000033'
  const light = '#00000011'

  const toggleCheckHandler = () => {
    setIsChecked(!isChecked)
    setSelectedCity(city)
    setIndex(index)
  }
  useEffect(() => {
    if (index === 0) {
      inputRef.current.setAttribute('checked', 'checked')
    }
  }, [])
  return (

    <CityItemWrapper style={{ background: isChecked ? dark : light, borderRadius: '10px' }}>
      <Heading >
        <p>{city}</p>
        <p className='input'>
          <input type={'radio'} ref={inputRef} name={'selectedCity'} onChange={toggleCheckHandler} />
        </p>
      </Heading>
      <MiniPlot data={data} color={getColor(index)} />
    </CityItemWrapper>
  )
}
