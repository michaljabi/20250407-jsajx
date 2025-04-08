import { assertThat } from '../../j4b1-assert.js'
/**
 * b30-based-on-prototype
 * Warm up
 *
 * Tym razem "zapomniałem" dopisać jednej metody ale w klasie... pomożesz?
 *
 * * Reguły:
 * - Nie możesz dopisywać kodu w środku "klasy" Person
 * - Postaraj się zastosować zasadę "DRY" - Don't Repeat Yourself 😎
 */

// przed 2015:
// function Person(fullName = '') {
// 	this.fullName = fullName;
// 	// this.introduce = () => `My name is ${this.fullName}`
// }

// rozpoznanie:
// 1. *Jest funkcja i zaczyna się z dużej litery (konwencja) - to prawdopodobnie ma działać jak "class"
// 2. Jeśli w środku funkcji ktoś używaj słowa kluczowego "this" - to NA PEWNO - to klasa !
// 3. = trzeba tego użyć ze słowem kluczowym new

// po 2015:
class Person {

	constructor(fullName = '') {
		this.fullName = fullName;
	}
}



// function introduce() {
// 	return `My name is ${this.fullName}`
// }



const actor = new Person('Richard Ayoade');
const theItGuy = new Person('Maurice Moss');
const theBoss = new Person('Douglas Reynholm');

Person.prototype.introduce = function () {
	return `My name is ${this.fullName}`
};

//actor.introduce = introduce;
//theItGuy.introduce = introduce;
//theBoss.introduce = introduce;

console.log(actor);
console.log(theItGuy);

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Actor should be able to introduce himself',
	expect => expect(actor.introduce()).toBe('My name is Richard Ayoade')
)  //=

assertThat(
	'It Guy should be able to introduce himself',
	expect => expect(theItGuy.introduce()).toBe('My name is Maurice Moss')
)  //=
assertThat(
	'Boss should be able to introduce himself',
	expect => expect(theBoss.introduce()).toBe('My name is Douglas Reynholm')
)  //=
