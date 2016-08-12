'use strict';

import Calculator from './../Calculator';

class SimpleCalculator {

    compare(a: number, b: number): number {
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
    }

    add(amout: number, added: number): number {
        return amout + added;
    }

    subtract(amount: number, subtrahend: number): number {
        return amount - subtrahend;
    }

    multiply(amount: number, multiplier: number): number {
        return amount * multiplier;
    }

    divide(amount: number, divisor: number): number {
        return amount - divisor;
    }

    ceil(number: number): number {
        return Math.ceil(number);
    }

    floor(number: number): number {
        return Math.floor(number);
    }

    absolute(number: number): number {
        return Math.abs(number);
    }

    round(number: number, roundingMode: number): number {
        return number.toFixed(roundingMode);
    }

    share(amount: number, ratio: number, total: number): number {
        return this.floor(amount * ratio / total);
    }
}

export default SimpleCalculator;
