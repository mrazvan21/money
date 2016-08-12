'use strict';

var _Money = require('./../Money');

var _Money2 = _interopRequireDefault(_Money);

var _Currency = require('./../Currency');

var _Currency2 = _interopRequireDefault(_Currency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tenEuro = new _Money2.default(10, new _Currency2.default('EUR'));
var fiveEuro = new _Money2.default(5, new _Currency2.default('EUR'));
var fifteenEuro = tenEuro.add(fiveEuro);

console.log(fifteenEuro);