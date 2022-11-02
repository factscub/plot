import React, { useEffect, useRef } from 'react'
import { PlotWrapper } from './styles'
import * as Plot from "@observablehq/plot";
import { getColor } from '../../Utils';

export const PlotContainer = ({ index, selectedCity, isOpen, cityData }) => {
  const data = cityData[selectedCity]
  const dimensions = useRef()
  const plotRef = useRef()

  useEffect(() => {

    let plot;
    const { width } = dimensions.current.getBoundingClientRect()

    try {
      plot = Plot.plot({
        grid: true,
        style: {
          background: 'transparent',
          height: 430,
          paddingLeft: 10,

        },
        width,
        marks: [
          Plot.line(data, {
            x: 'date', y: 'mean',
            stroke: getColor(index),
      
          })
        ]
      })

    } catch (cx) {
      console.log(cx)
    }

    plotRef.current.append(plot)
    return () => plotRef.current.removeChild(plot)
  }, [cityData, data,index])

  return (
    <PlotWrapper
      ref={dimensions}
      animate={{ x: isOpen ? 240 : 0 }}
      transition={{type:'tween'}}>
      <p>US Temperatures</p>
      <div ref={plotRef}></div>
    </PlotWrapper>
  )
}
