type TFunStringManipulator = (input: string) => string;

const toUpperCase: TFunStringManipulator = (text) => text.toUpperCase();
const toLowerCase: TFunStringManipulator = (text) => text.toLowerCase();

type TFunMathOperations = {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
};

const calculator: TFunMathOperations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};

calculator.add(2, 4);
calculator.subtract(2, 4);
