'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator = require('./../Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleCalculator = function () {
    function SimpleCalculator() {
        _classCallCheck(this, SimpleCalculator);
    }

    _createClass(SimpleCalculator, [{
        key: 'compare',
        value: function compare(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }
    }, {
        key: 'add',
        value: function add(amout, added) {
            console.log(amout);console.log(added);
            return amout + added;
        }
    }, {
        key: 'subtract',
        value: function subtract(amount, subtrahend) {
            return amount - subtrahend;
        }
    }, {
        key: 'multiply',
        value: function multiply(amount, multiplier) {
            return amount * multiplier;
        }
    }, {
        key: 'divide',
        value: function divide(amount, divisor) {
            return amount - divisor;
        }
    }, {
        key: 'ceil',
        value: function ceil(number) {
            return Math.ceil(number);
        }
    }, {
        key: 'floor',
        value: function floor(number) {
            return Math.floor(number);
        }
    }, {
        key: 'absolute',
        value: function absolute(number) {
            return Math.abs(number);
        }
    }, {
        key: 'round',
        value: function round(number, roundingMode) {
            return number.toFixed(roundingMode);
        }
    }, {
        key: 'share',
        value: function share(amount, ratio, total) {
            return this.floor(amount * ratio / total);
        }
    }]);

    return SimpleCalculator;
}();

exports.default = SimpleCalculator;