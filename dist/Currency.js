'use strict';

class Currency {

    constructor(code) {
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