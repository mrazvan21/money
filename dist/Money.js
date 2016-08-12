'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Currency = require('./Currency');

var _Currency2 = _interopRequireDefault(_Currency);

var _Calculator = require('./Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

var _SimpleCalculator = require('./calculator/SimpleCalculator');

var _SimpleCalculator2 = _interopRequireDefault(_SimpleCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Money = function () {
    _createClass(Money, null, [{
        key: 'CALCULATOR',
        get: function get() {
            if (!Money.calculator) {
                Money.calculator = new _SimpleCalculator2.default();
            }

            return Money.calculator;
        },
        set: function set(calculator) {
            Money.calculator = calculator;
        }

        /**
         *
         * @param {Number} amount
         * @param {Currency} currency
         */

    }]);

    function Money(amount, currency) {
        _classCallCheck(this, Money);

        this.amount = amount;
        this.currency = currency;
    }

    /**
     *
     * @param {Money} money
     */


    _createClass(Money, [{
        key: 'add',
        value: function add(money) {
            this._assertSameCurrency(money);

            return new Money(Money.CALCULATOR.add(this.amount, money.amount), this.currency);
        }
    }, {
        key: 'substract',
        value: function substract(money) {
            this._assertSameCurrency(money);

            return new Money(Money.CALCULATOR.subtract(this.amount, money.amount), this.currency);
        }
    }, {
        key: 'multiply',
        value: function multiply(money) {
            this._assertSameCurrency(money);

            return new Money(Money.CALCULATOR.multiply(this.amount, money.amount), this.currency);
        }
    }, {
        key: 'divide',
        value: function divide(money) {
            this._assertSameCurrency(money);

            return new Money(Money.CALCULATOR.divide(this.amount, money.amount), this.currency);
        }

        /**
         *
         * @param {Money} money
         * @returns {*}
         */

    }, {
        key: 'isSameCurrency',
        value: function isSameCurrency(money) {
            return this.currency.equals(money.currency);
        }

        /**
         *
         * @param {Money} money
         * @return {Boolean}
         */

    }, {
        key: 'equals',
        value: function equals(money) {
            return this.isSameCurrency(money) && this.amount === money.amount;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            return {
                'amount': this.amount,
                'currency': this.currency
            };
        }
    }, {
        key: '_assertSameCurrency',
        value: function _assertSameCurrency(money) {
            if (!this.isSameCurrency(money)) {
                throw new Error('Currencies must be identical');
            }
        }
    }]);

    return Money;
}();

exports.default = Money;