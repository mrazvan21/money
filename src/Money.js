'use strict';

import {Currency} from './Currency';
import {Calculator} from './Calculator';

class Money {

    amount: number;
    currency: Currency;

    static get calculator() {}

    static set calculator(calculator: Calculator) {}

    /**
     *
     * @param {Number} amount
     * @param {Currency} currency
     */
    constructor(amount: number, currency: Currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /**
     *
     * @param {Money} money
     */
    add(money: Money): Money {
        this._assertSameCurrency(money);

        return new Money((this.amount+money.amount), this.currency);
    }

    substract(money: Money): Money {
        this._assertSameCurrency(money);

        return new Money((this.amount-money.amount), this.currency)
    }

    multiply(money: Money): Money {
        this._assertSameCurrency(money);

        return new Money((this.amount*money.amount), this.currency);
    }

    divide(money: Money): Money {
        this._assertSameCurrency(money);

        return new Money((this.amount/money.amount), this.currency);
    }

    /**
     *
     * @param {Money} money
     * @returns {*}
     */
    isSameCurrency(money: Money): boolean {
        return this.currency.equals(money.currency);
    }

    /**
     *
     * @param {Money} money
     * @return {Boolean}
     */
    equals(money: Money): boolean {
        return this.isSameCurrency(money) && this.amount === money.amount;
    }

    toJSON() {
        return {
            'amount': this.amount,
            'currency': this.currency
        };
    }

    _assertSameCurrency(money: Money): void {
        if (!this.isSameCurrency(money)) {
            throw new Error('Currencies must be identical');
        }
    }
}

module.exports = Money;
