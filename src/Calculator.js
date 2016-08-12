'use strict';

class Calculator {

    compare(a: number, b: number): number {
        throw new Error("Abstract method!");
    }

    add(amout: number, added: number): number {
        throw new Error("Abstract method!");
    }

    subtract(amount: number, subtrahend: number): number {
        throw new Error("Abstract method!");
    }

    multiply(amount: number, multiplier: number): number {
        throw new Error("Abstract method!");
    }

    divide(amount: number, divisor: number): number {
        throw new Error("Abstract method!");
    }

    ceil(number: number): number {
        throw new Error("Abstract method!");
    }

    floor(number: number): number {
        throw new Error("Abstract method!");
    }

    absolute(number: number): number {
        throw new Error("Abstract method!");
    }

    round(number: number, roundingMode: number): number {
        throw new Error("Abstract method!");
    }

    share(amount: number, ratio: number, total: number): number {
        throw new Error("Abstract method!");
    }
}

export default Calculator;
