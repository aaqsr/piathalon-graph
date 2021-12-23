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

export default function InputSlider() {
    const [value, setValue] = React.useState<
        number | string | Array<number | string>
    >(0);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < -10) {
            setValue(10);
        } else if (value > 10) {
            setValue(10);
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
                        value={typeof value === "number" ? value : 0}
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
                        value={value}
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
