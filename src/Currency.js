'use strict';

class Currency {
    code: string;

    constructor(code: string) {
        this.code = code;
    }

    equals(currency: Currency): boolean {
        return this.code === currency.code;
    }

    toJSON(): string {
        return this.code;
    }

    toString() {
        return this.code;
    }
}

export default Currency;
