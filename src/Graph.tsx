import { Grid, Typography } from '@mui/material';
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
        // console.log(paramState[objKey])
        funcStr = funcStr.replace(objKey.toString(), paramState[objKey].toString())
        return funcStr;
    })
    // console.log(props.func)
    // console.log (funcStr);
        // return funcStr
    // }

    return (
        <>
            <FunctionPlot
                options={{
                    target: "",
                    data: [
                        {
                            fn: funcStr.toString() // make the values replace the string
                        }
                    ],
                    xAxis: {
                        domain: [-10, 10]
                    }
                }}
            />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "10vh" }}
            >
                <Grid item xs={3}>
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
                </Grid>
            </Grid>
            <div style={{margin: "20px"}}></div>


            {/* <Typography align='right' style={{marginBottom:'15px'}}>
                Points: {Object.keys(props.paramObj).length}
            </Typography> */}

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
        {Object.keys(props.eqs).map( (key, index) => (
            <>
                <Typography variant="h6">{`Graph number ${index+1}:`}</Typography>
                <Graph func={key} paramObj={props.eqs[key]}/>
                
            </>
        ))}
        </>
    )
};

export default Graph;