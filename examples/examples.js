import Money from './../Money';
import Currency from './../Currency';

let tenEuro = new Money(10, new Currency('EUR'));
let fiveEuro = new Money(5, new Currency('EUR'));
let fifteenEuro = tenEuro.add(fiveEuro);

console.log(fifteenEuro);