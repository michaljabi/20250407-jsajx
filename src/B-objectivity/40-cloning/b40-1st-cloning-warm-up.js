import { assertThat } from '../../j4b1-assert.js'
/**
 * b40-cloning
 * Warm up
 *
 * Klonowanie obiektów
 *
 * * Reguły:
 * - Kod możesz pisać tylko w lokalnym scope funkcji `cloner`
 */

const myFirstObject = {
	name: 'August Oetker',
	age: 56,
	title: 'Dr.'
}

const myFirstImpressiveObject = {
	name: 'John Wick',
	age: 55,
	address: {
		zip: 11765,
		street: 'Horseshoe Road',
		neighbourhood: 'Long island',
		city: 'New York'
	}
}

function cloner(objectToClone) {
	// #Reguła:
	// Kodzik można pisać tylko w tym bloku.
	const newObj = { ...objectToClone };
	for (let key in newObj) {
		if (newObj[key] !== null && typeof newObj[key] === 'object') {
			newObj[key] = cloner(newObj[key])
		}
	}

	return newObj;
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:

const clonedFirstObject = cloner(myFirstObject);
const clonedFirstImpressiveObject = cloner(myFirstImpressiveObject);


console.log(1 === 1);
console.log(true === true);
console.log(null === null);

console.log(0n === 0n);


console.log(Symbol() === Symbol());
console.log(typeof Symbol());
// console.log(new Symbol());

console.log({} === {});
console.log([] === []);

assertThat(
	'clonedFirstObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstObject).toBe(typeof myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > not being the same instance in memory!',
	expect => expect(clonedFirstObject).notToBe(myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > objects structure should be the same',
	expect => expect(JSON.stringify(clonedFirstObject)).toBe(JSON.stringify(myFirstObject))
)  //=

assertThat(
	'clonedFirstImpressiveObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstImpressiveObject).toBe(typeof myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > has same structure but not being the same instance in memory!',
	expect => expect(clonedFirstImpressiveObject).notToBe(myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > clone suppose to be deep !',
	expect => expect(clonedFirstImpressiveObject.address).notToBe(myFirstImpressiveObject.address)
)  //=
assertThat(
	'clonedFirstImpressiveObject > object structure should be the same',
	expect => expect(JSON.stringify(clonedFirstImpressiveObject)).toBe(JSON.stringify(myFirstImpressiveObject))
)  //=
