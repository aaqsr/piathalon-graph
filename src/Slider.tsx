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
    val: {
        value: any,
        setValue: Function
    }
}

export const InputSlider: React.FC<SliderProps> = props => {

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        props.val.setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.val.setValue(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleBlur = () => {
        if (props.val.value < -10) {
            props.val.setValue(10);
        } else if (props.val.value > 10) {
            props.val.setValue(10);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>
                Placeholder Text
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof props.val.value === "number" ? props.val.value : 0}
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
                        value={props.val.value}
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
