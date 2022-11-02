import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

export const MiniPlot = ({ data,color }) => {
    const miniPlotRef = useRef()

    useEffect(() => {

        if (!data) return;        
        const rect =  miniPlotRef.current.getBoundingClientRect();

        let plot;

        try {
            plot = Plot.plot({
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,

                width: rect.width,
                height: rect.height,

                marks: [
                    Plot.line(data, { x: "date", y: "mean" })
                ],
                style: {
                    background: "transparent",
                    color
                },
            })
        }
        catch (ex) {
            console.log(ex)
        }

        miniPlotRef.current.appendChild(plot);

        return () => {
           miniPlotRef.current.removeChild(plot)
        }

    }, [data, miniPlotRef,color]);

    return <div ref={miniPlotRef} style={{ width: 200, height: 40 }}></div>
}
