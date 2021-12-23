import React, { useEffect, useRef, useState } from 'react'
import functionPlot from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'

export interface FunctionPlotProps {
  options?: FunctionPlotOptions
}

export const FunctionPlot: React.FC<FunctionPlotProps> = React.memo(({ options }) => {
  const rootEl = useRef(null)

  useEffect(() => {
    try {
      functionPlot(Object.assign({}, options, { target: rootEl.current }))
    } catch (e) {}
  })

  return (<div ref={rootEl} />)
}, () => false)

const Graph: React.FC = () => {
    const [constA, changeA] = useState(-1);

    return (
    <>
        <div id="" />
        <FunctionPlot
            options={{
                target: '',
                data: [{
                    fn: `${constA}x^2`,
                }],
            }}
        />
    </>
    )
}

export default Graph;