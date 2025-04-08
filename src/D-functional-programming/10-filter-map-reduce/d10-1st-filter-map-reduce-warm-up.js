import { assertThat } from '../../j4b1-assert.js'
/**
 * d10-filter-map-reduce
 * Warm up
 *
 * Zamiana kejsów!
 *
 * * Reguły:
 * - Dopisz brakujące metody
 * - Transformując dane staraj się korzystać z programowania funkcyjnego (metody tablicowe)
 */

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const kebabCaseToCamelCase = (sentence) => sentence.split('-').map((word, idx) => {
	if (idx === 0) {
		console.log(word);
		return word.toLowerCase()
	}
	return capitalize(word)
}).join('')

const kebabCaseToPascalCase = (sentence) => sentence.split('-').map(capitalize).join('');
const kebabCaseToSnakeCase = (sentence) => sentence.replaceAll('-', '_').toLowerCase();


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'capitalize > should make first letter to uppercase',
	expect => expect(capitalize('this is it')).toBe('This is it')
)  //=
assertThat(
	'kebabCaseToCamelCase > Should convert string hello-world in to helloWorld',
	expect => expect(kebabCaseToCamelCase('hello-world')).toBe('helloWorld')
)  //=
assertThat(
	'kebabCaseToPascalCase > Should convert string my-super-world in to MySuperWorld',
	expect => expect(kebabCaseToPascalCase('my-super-world')).toBe('MySuperWorld')
)  //=
assertThat(
	'kebabCaseToSnakeCase > Should convert string my-first-python-variable in to my_first_python_variable',
	expect => expect(kebabCaseToSnakeCase('my-first-python-variable')).toBe('my_first_python_variable')
)  //=
