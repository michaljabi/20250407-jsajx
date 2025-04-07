import { assertThat } from "../../j4b1-assert.js";
/**
 * a10-the-need-of-modularity
 * Warm up
 *
 * Lata świetlne przed ES6 (2015)....
 *
 * Wszystko takie wymieszane w tych skołpach dżawaskripta...
 *
 * * Reguły:
 * - można dopisywać nowy kod.
 * - istniejący kod powinien działać tak jak do tej pory (console.logi etc.)
 * - nie można w nowym kodzie użyć odniesienia ani przypisania do zmiennej `myValue`
 * - nie można zmieniać istniejącego kodu.
 */

var myValue = 2000;
console.log("Current value is", myValue);

function run() {
  // for (var x = 0; x <= 10; x++) 
  var myValue = 3000;
  console.log("Current value is", myValue);
}

// console.log(x);
console.log(myValue);
//}
run();
// myValue = 2000;

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat("myValue suppose to be 2000", (expect) =>
  expect(myValue).toBe(2000)
); //=
