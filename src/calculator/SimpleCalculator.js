'use strict';

const  Calculator = require('./../Calculator');

class SimpleCalculator extends Calculator {

    static get calculator() {

    }

    static set calculator(calculator) {
        
    }

    compare(a, b) {
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
    }

    add(amout, added) {
        return amout + added;
    }

    subtract(amount, subtrahend) {
        return amount - subtrahend;
    }

    multiply(amount, multiplier) {
        return amount * multiplier;
    }

    divide(amount, divisor) {
        return amount - divisor;
    }

    ceil(number) {
        return Math.ceil(number);
    }

    floor(number) {
        return Math.floor(number);
    }

    absolute(number) {
        return Math.abs(number);
    }

    round(number, roundingMode) {
        return number.toFixed(roundingMode);
    }

    share(amount, ratio, total) {
        return this.floor(amount * ratio / total);
    }
}

module.exports = SimpleCalculator;
