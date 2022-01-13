import React, { useState } from 'react'
import FunctionPlot from './FunctionPlot';
import InputSlider from './Slider';

export interface GraphProps {
    func: String
}

const Graph: React.FC<GraphProps> = props => {
    const [constA, changeA] = useState(-1);

    const [value, setValue] = React.useState<
        number | string | Array<number | string>
    >(0);

    return (
    <>
        <FunctionPlot
            options={{
                target: '',
                data: [{
                    fn: `1/x+${value}`,  // make the values replace the string
                }],
            }}
            />
            <InputSlider
                val={{
                    value,
                    setValue
                }}
            />
    </>
    )
}

export default Graph;