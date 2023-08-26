interface IFuncStringManipulator {
  (text: string): string;
}

const toUpperCase: IFuncStringManipulator = (text) => text.toUpperCase();
const toLowerCase: IFuncStringManipulator = (text) => text.toLowerCase();

interface IFuncMathOperations {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
}

const calculator: IFuncMathOperations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
}

calculator.add(2, 4)
calculator.subtract(2, 4)