'use strict';

class Calculator {

    compare(a, b) {
        throw new Error("Abstract method!");
    }

    add(amout, added) {
        throw new Error("Abstract method!");
    }

    subtract(amount, subtrahend) {
        throw new Error("Abstract method!");
    }

    multiply(amount, multiplier) {
        throw new Error("Abstract method!");
    }

    divide(amount, divisor) {
        throw new Error("Abstract method!");
    }

    ceil(number) {
        throw new Error("Abstract method!");
    }

    floor(number) {
        throw new Error("Abstract method!");
    }

    absolute(number) {
        throw new Error("Abstract method!");
    }

    round(number, roundingMode) {
        throw new Error("Abstract method!");
    }

    share(amount, ratio, total) {
        throw new Error("Abstract method!");
    }
}

module.exports = Calculator;
