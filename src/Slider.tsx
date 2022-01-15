import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
    width: 42px;
`;

export interface SliderProps {
    index: string,
    state: {
        paramState: any,
        setParamState: Function
    }
}
 
// todo: clean up and comment :

export const InputSlider: React.FC<SliderProps> = props => {

    const updateState = (newValue: number | number[] | string) => {
        let temp = { ...props.state.paramState };
        temp[props.index] = newValue;
        props.state.setParamState(temp);
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        updateState(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        updateState(event.target.value === "" ? "" : Number(event.target.value));
    }

    const handleBlur = () => {
        if (props.state.paramState[props.index] < -10) {
            updateState(-10);
        } else if (props.state.paramState[props.index] > 10) {
            updateState(10)
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>
                {`Manipulate ${props.index}:`}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={
                            typeof props.state.paramState[props.index] ===
                            "number"
                                ? props.state.paramState[props.index]
                                : 0
                        }
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={-10}
                        step={0.1}
                        max={10}
                        track={false}
                        marks={[
                            {
                                value: 0,
                                label: 0
                            }
                        ]}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={props.state.paramState[props.index]}
                        size="medium"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 0.1,
                            min: -10,
                            max: 10,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default InputSlider;
