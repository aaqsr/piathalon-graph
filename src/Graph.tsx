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

    // const funcStr = () => {
    let funcStr = props.func;
    Object.keys(props.paramObj).map( objKey => {
        console.log(paramState[objKey])
        funcStr = funcStr.replace(objKey.toString(), paramState[objKey].toString())
        return funcStr;
    })
    console.log(props.func)
    console.log (funcStr);
        // return funcStr
    // }

    return (
        <>
            <FunctionPlot
                options={{
                    title: props.func.toString(),
                    target: "",
                    data: [
                        {
                            fn: funcStr.toString() // make the values replace the string
                        }
                    ],
                    xAxis: {
                        domain: [-10,10]
                    }
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

interface GraphGenProps {
    eqs: {
        [key: string]: { [key: string]: number }
    }
}

export const GraphGen: React.FC<GraphGenProps> = (props) => {
    return (
        <>
        {Object.keys(props.eqs).map(key => (
            <Graph func={key} paramObj={props.eqs[key]}/>
        ))}
        </>
    )
};

export default Graph;