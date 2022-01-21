export const polys = {
    "ax": { a: 1 },
    "ax+b": { a: 1, b: 0 },
    "-a x^2": { a: 1 },
    "-a x^2 + b x + c": { a: 1, b: 0, c: 0 }
};

export const trigs = {
    "y=sin(ax)": { a: 1 },
    "y=bsin(ax)": { a: 1, b: 1 },
    "y=atan(x)+b": { a: 1, b: 0 },
};

export const exps = {
    "y=exp(ax)": { a: 1 },
    "y=exp(ax)+bx^2": { a: 1, b: 0 },
    "y=ln(ax)": { a: 1 },
    "y=ln(ax)+ b x^2 +c": { a: 1, b: 0, c: 0 }
};

export const final = {
    "y=a exp(x) + b sin(x) + c": { a: 1, b: 1, c: 0 },
    "y=a sin(b x)+  tan( c x)": { a: 1, b: 1, c: 0 },
    "y=a x^3 + b sin (cx)":{a:1, b:0, c: 0}
};
