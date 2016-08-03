'use strict';

const Currency = require('./Currency');

class Money {

    /**
     *
     * @param {Number} amount
     * @param {Currency} currency
     */
    constructor(amount, currency) {
        if (typeof amount != 'number') {
            throw new Error('Amount must be Number');
        }
        
        if (! (currency instanceof Currency)) {
            throw new Error('Currency must be Currency');
        }

        this.amount = amount;
        this.currency = currency;
    }

    /**
     *
     * @param {Money} money
     */
    add(money) {
        this._assertSameCurrency(money);

        return new Money((this.amount+money.amount), this.currency);
    }

    substract(money) {
        this._assertSameCurrency(money);

        return new Money((this.amount-money.amount), this.currency)
    }

    multiply(money) {
        this._assertSameCurrency(money);

        return new Money((this.amount*money.amount), this.currency);
    }

    divide(money) {
        this._assertSameCurrency(money);

        return new Money((this.amount/money.amount), this.currency);
    }

    /**
     *
     * @param {Money} money
     * @returns {*}
     */
    isSameCurrency(money) {
        return this.currency.equals(money.currency);
    }

    /**
     *
     * @param {Money} money
     * @return {Boolean}
     */
    equals(money) {
        return this.isSameCurrency(money) && this.amount === money.amount;
    }

    toJSON() {
        return {
            'amount': this.amount,
            'currency': this.currency
        };
    }

    _assertSameCurrency(money) {
        if (!this.isSameCurrency(money)) {
            throw new Error('Currencies must be identical');
        }
    }
}

module.exports = Money;
