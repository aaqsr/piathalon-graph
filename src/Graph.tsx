import React, { useState } from 'react'
import FunctionPlot from './FunctionPlot';

export interface GraphProps {
    func: String
}

const Graph: React.FC<GraphProps> = props => {
    const [constA, changeA] = useState(-1);

    return (
    <>
        <FunctionPlot
            options={{
                target: '',
                data: [{
                    fn: `${props.func.toString()}`,
                }],
            }}
        />
    </>
    )
}

export default Graph;