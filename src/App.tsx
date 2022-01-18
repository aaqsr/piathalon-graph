import React from "react";
import Graph from './Graph';

export const App: React.FC = () => (
    <>
        {/* <Graph func={"ax"} paramObj={{ a: 1 }} /> */}
        {/* <Graph func={"ax+b"} paramObj={{ a: 1, b: 0 }} /> */}
        {/* <Graph func={"-a x^2"} paramObj={{ a: 1 }} /> */}
        {/* <Graph func={"-a x^2 + b x + c"} paramObj={{ a: 1, b: 0, c: 0 }} /> */}
        {/* <Graph func={"y=sin(ax)"} paramObj={{ a: 1 }} /> */}
        {/* <Graph func={"y=bsin(ax)"} paramObj={{ a: 1, b: 1 }} /> */}
        <Graph func={"y=asin(bx)+cos(cx)"} paramObj={{ a: 1, b: 1, c: 0 }} />
        {/* <Graph func={"y=atan(x)+b"} paramObj={{ a: 1, b: 0 }} /> */}
        {/* <Graph func={"y=atan(x)^2+btan(x)-c"} paramObj={{ a: 1, b: 1, c: 0 }} />  it works but why??? */}
        <Graph func={"y=e^ax"} paramObj={{ a: 1 }} />
        <Graph func={"y=e^(ax+b)"} paramObj={{ a: 1, b: 0 }} />
        <Graph func={"y=ln(ax)"} paramObj={{ a: 1 }} />
        <Graph func={"y=ln(ax)+b"} paramObj={{ a: 1, b: 0 }} />
        <Graph func={"-ln(ax)+bx²+1/sin(cx)"} paramObj={{ a: 0, b: 0, c: 0 }} />
        {/* <Graph func={"a sin( b x) + cx + d"} paramObj={{ a: 1, b: 1, c: 0, d: 0}} /> */}
    </>
);