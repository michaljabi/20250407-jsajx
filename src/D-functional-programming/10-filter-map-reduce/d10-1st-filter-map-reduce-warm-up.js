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

export const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const firstToLowerAndCapitalizeRest = (word, idx) => idx === 0 ? word.toLowerCase() : capitalize(word);
const splitBy = (sentence, sign = '-') => sentence.split(sign);
const kebabCaseToCamelCase = (sentence) => splitBy(sentence).map(firstToLowerAndCapitalizeRest).join('')
const kebabCaseToPascalCase = (sentence) => splitBy(sentence).map(capitalize).join('');
const kebabCaseToSnakeCase = (sentence) => sentence.replaceAll('-', '_').toLowerCase();

// Pure function:
// 1. Dla tych samych danych wejściowych daje te same wyjściowe
// 2. Nie ma efektów uboczny (np. podczas jej wykonywania nie ma "strzału do serwera")
// 3. Wykonuje tylko jedną operacje (możliwie atomizujemy)

console.log(capitalize('michał'))

const addExclamation = (word) => word + '!';

const capitalizeAndAddExclamation = word => addExclamation(capitalize(word))
console.log(['kasia', 'zosia'].map(capitalizeAndAddExclamation))
// map to HOF (Higher Order Function) - zasadniczo funkcja która przyjmuje inną funkcję
console.log(['kasia', 'zosia'].map(capitalize).map(addExclamation))

// z tego;[1, 2, 3, 4]
// zrób to ;[1, 4, 9, 16]
const baseArray = [1, 2, 3, 4]
// proste...
let result = [];
for (const x of baseArray) {
	result.push(x * x);
}
console.log(result);
console.log(baseArray);

console.log(baseArray.map(n => n * n))
console.log(baseArray)

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
