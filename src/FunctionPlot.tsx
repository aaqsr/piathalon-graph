import React, { useRef, useEffect } from "react";
import functionPlot from "function-plot";
import { FunctionPlotOptions } from "function-plot/dist/types";

export interface FunctionPlotProps {
    options?: FunctionPlotOptions;
}

export const FunctionPlot: React.FC<FunctionPlotProps> = React.memo(
    ({ options }) => {
        const rootEl = useRef(null);

        useEffect(() => {
            try {
                functionPlot(
                    Object.assign({}, options, { target: rootEl.current })
                );
            } catch (e) {}
        });

        return <div ref={rootEl} />;
    },
    () => false
);

export default FunctionPlot;