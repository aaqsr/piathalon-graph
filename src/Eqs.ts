export const polys = {
    "ax": { a: 1 },
    "ax+b": { a: 1, b: 0 },
    "-a x^2": { a: 1 },
    "-a x^2 + b x + c": { a: 1, b: 0, c: 0 }
};

export const trigs = {
    "y=sin(ax)": { a: 1 },
    "y=bsin(ax)": { a: 1, b: 1 },
    "y=d sin(e x)+ cos( f x)": { d: 1, e: 1, f: 0 },
    "y=atan(x)+b": { a: 1, b: 0 }
};

export const exps = {
    "y=exp(ax)": { a: 1 },
    "y=exp(ax)+b": { a: 1, b: 0 },
    "y=ln(ax)": { a: 1 },
    "y=ln(ax)+b": { a: 1, b: 0 }
};

export const final = {
    "y=a tan(x)^2 + b tan(x) - c": { a: 1, b: 1, c: 0 },
};
