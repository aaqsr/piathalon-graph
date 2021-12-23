import React, { useState } from 'react'
import FunctionPlot from './FunctionPlot';

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