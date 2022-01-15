import { Input } from '@mui/material';
import { padding } from '@mui/system';
import React, { useState } from 'react'
import FunctionPlot from './FunctionPlot';
import InputSlider from './Slider';

export interface GraphProps {
    func: String,
    paramObj: {[key: string]: number}
}

const Graph: React.FC<GraphProps> = props => {
    // const [constA, changeA] = useState(-1);

    // const [value, setValue] = React.useState<
    //     number | string | Array<number | string>
    // >(0);

    const [paramState, setParamState] = useState(props.paramObj);
    // let paramMutable = { ...props.paramObj };
    

    return (
        <>
            <FunctionPlot
                options={{
                    target: "",
                    data: [
                        {
                            fn: `${paramState["a"]}/x + ${paramState["b"]} + (${paramState["c"]})x^2` // make the values replace the string
                        }
                    ]
                }}
            />

            {Object.keys(props.paramObj).map((val) => (
                <div style={{ margin: 25 }}>
                    <InputSlider
                        index={val}
                        state={{
                            paramState,
                            setParamState
                        }}
                    />
                </div>
            ))}

            {/* <InputSlider
                val={{
                    value,
                    setValue
                }}
            /> */}
        </>
    );
}

export default Graph;