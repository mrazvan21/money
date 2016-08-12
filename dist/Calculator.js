'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);
    }

    _createClass(Calculator, [{
        key: "compare",
        value: function compare(a, b) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "add",
        value: function add(amout, added) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "subtract",
        value: function subtract(amount, subtrahend) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "multiply",
        value: function multiply(amount, multiplier) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "divide",
        value: function divide(amount, divisor) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "ceil",
        value: function ceil(number) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "floor",
        value: function floor(number) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "absolute",
        value: function absolute(number) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "round",
        value: function round(number, roundingMode) {
            throw new Error("Abstract method!");
        }
    }, {
        key: "share",
        value: function share(amount, ratio, total) {
            throw new Error("Abstract method!");
        }
    }]);

    return Calculator;
}();

exports.default = Calculator;