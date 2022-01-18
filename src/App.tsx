import React from "react";
import Graph from './Graph';

export const App: React.FC = () => (
    <>
        {/* <Graph func={"{a} x^2 + {b} x + {c}"} paramObj={{ a: 0, b: 0, c: 0 }} /> */}

        <Graph func={"a sin( b x) + c"} paramObj={{ a: 0, b: 0, c: 0 }} />
    </>
);