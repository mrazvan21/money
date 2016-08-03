const Currency = require('./../src/Currency');

describe("Currency", () => {
    'use strict';

    beforeEach(() => {
       this.currency = new Currency('EUR');
    });

    it('currency param from constructor should be type string', () => {
        expect(typeof(this.currency.code)).toBe('string');
    });

    it('should be equals to a currency with the same code', () => {
        expect(this.currency.equals(new Currency('EUR'))).toBe(true);
    });

    it('should not be equals to a currency with the same code', () => {
        expect(this.currency.equals(new Currency('USD'))).toBe(false);
    });

});
