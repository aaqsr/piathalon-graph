import { Grid } from "@mui/material";
import React from "react";
import Graph from './Graph';
import GraphTabs from "./GraphTabs";
import { Typography } from "@mui/material";
import "./index.css";
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Computer Modern Serif"',
        ].join(",")
    }
});


export const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
                {/* <Graphs /> */}
                <Typography
                    align="center"
                    variant="h6"
                    style={{ margin: "10px" }}
                >
                    Graphs have points ( number of sliders x the tab multiplier
                    )
                </Typography>
                <GraphTabs />
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        <div style={{marginRight: "10px"}}>
            <Typography align="right">
                &copy; Built by Awab Q.
                Part of Pi-athalon '22
            </Typography>
            <Typography align="right">
                Thank you to the OSS community
                Source code on Github
            </Typography>
        </div>
    </ThemeProvider>
);



// const Graphs: React.FC = () => (
//     <>
//         <Graph func={"ax"} paramObj={{ a: 1 }} />
//         <Graph func={"ax+b"} paramObj={{ a: 1, b: 0 }} />
//         <Graph func={"-a x^2"} paramObj={{ a: 1 }} />
//         <Graph func={"-a x^2 + b x + c"} paramObj={{ a: 1, b: 0, c: 0 }} />
//         <Graph func={"y=sin(ax)"} paramObj={{ a: 1 }} />
//         <Graph func={"y=bsin(ax)"} paramObj={{ a: 1, b: 1 }} />
//         <Graph func={"y=d sin(e x)+ cos( f x)"} paramObj={{ d: 1, e: 1, f: 0 }} />
//         it runs but it's too complicated for them
//         <Graph func={"y=atan(x)+b"} paramObj={{ a: 1, b: 0 }} />
//         <Graph func={"y=atan(x)^2+btan(x)-c"} paramObj={{ a: 1, b: 1, c: 0 }} />
//         it works but why???
//         <Graph func={"y=exp(ax)"} paramObj={{ a: 1 }} />
//         <Graph func={"y=exp(ax)+b"} paramObj={{ a: 1, b: 0 }} />
//         <Graph func={"y=ln(ax)"} paramObj={{ a: 1 }} />
//         <Graph func={"y=ln(ax)+b"} paramObj={{ a: 1, b: 0 }} />
//         {/* <Graph func={"-ln(ax)+bx^2+ 1 / (sin(cx)) "} paramObj={{ a: 0, b: 0, c: 1 }} /> */}
//         {/* <Graph func={"a sin( b x) + cx + d"} paramObj={{ a: 1, b: 1, c: 0, d: 0}} /> */}
//     </>
// );