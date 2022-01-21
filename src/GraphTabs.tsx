import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { GraphGen } from "./Graph";
import * as Eqs from "./Eqs";
import { textAlign } from "@mui/system";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function GraphTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}> 
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Polynomial x1" {...a11yProps(0)} />
                    <Tab label="Trignometric x2" {...a11yProps(1)} />
                    <Tab label="Exponential x2" {...a11yProps(2)} />
                    <Tab label="Final x3 woah" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <GraphGen eqs={Eqs.polys} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GraphGen eqs={Eqs.trigs} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <GraphGen eqs={Eqs.exps} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <GraphGen eqs={Eqs.final} />
            </TabPanel>
        </Box>
    );
}
