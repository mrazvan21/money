const Currency = require('./../src/Currency');
const Money = require('./../src/Money');

describe("Money", () => {
    'use strict';

    beforeEach(() => {
        this.money = new Money(100, new Currency('EUR'));
    });


    it("should add two money value", () => {
        let addend = new Money(20, new Currency('EUR'));
        expect(this.money.add(addend).amount).toBe(120);
    });

    it("should substract two money value", () => {
        let subtrahend = new Money(20, new Currency('EUR'));
        expect(this.money.substract(subtrahend).amount).toBe(80);
    });

    it("should multiply two money value", () => {
        let multiplier = new Money(2, new Currency('EUR'));
        expect(this.money.multiply(multiplier).amount).toBe(200);
    });

    it("should divide two money value", () => {
        let divisor = new Money(2, new Currency('EUR'));
        expect(this.money.divide(divisor).amount).toBe(50);
    });
});