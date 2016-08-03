'use strict';

class Currency {

    constructor(code) {
        if (typeof code != 'string') {
            throw new Error('Code should be String');
        }

        this.code = code;
    }

    equals(currency) {
        return this.code === currency.code;
    }

    toJSON() {
        return this.code;
    }

    toString() {
        return this.code;
    }
}

module.exports = Currency;