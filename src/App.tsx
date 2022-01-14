import React from "react";
import Graph from './Graph';

export const App: React.FC = () => (
    <>
        <Graph func={"x^2"} paramObj={{ a: 0, b: 0, c: 0 }} />

        <Graph func={"x^2"} paramObj={{ a: 0, b: 0, c: 0 }} />
    </>
);