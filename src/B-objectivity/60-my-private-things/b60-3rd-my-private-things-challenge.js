import { assertThat } from '../../j4b1-assert.js'
/**
 * b60-my-private-things
 * Challenge
 *
 * Niestety, wysokość zarobków w naszej firmie prawniczej — jest znana publicznie.
 * Nie możemy dopuścić, aby taki stan rzeczy się utrzymywał.
 *
 * Tylko na wyraźną prośbę `.getSalaryInfo()` - powinniśmy poznać zarobki.
 * Dodatkowo musi być jakiś sposób — żeby przyznawać prawnikom podwyżki...
 *
 * * Reguły:
 * - Kod zmieniaj tylko w `lawyerFactory`
 * - Nie zmieniaj parametrów lawyerFactory — takie pozostają.
 * - W odpowiednim momencie implementacji odkomentuj linię z wywołaniem metody `.makeARise(5000)`
 */

class Lawyer {

	#salary = 3000;

	constructor(fullName = '', salary = 3000) {
		const [firstName, lastName] = fullName.split(' ')
		this.firstName = firstName;
		this.lastName = lastName;
		this.#salary = salary;
	}

	getSalaryInfo() {
		return `${this.firstName} earns $${this.#salary}`
	}

	makeARise(riseValue) {
		this.#salary += riseValue;
	}
}

function lawyerFactory(fullName = '', salary = 3000) {
	// #Reguła:
	// Kodz1ik można pisać tylko w tym bloku.
	const [firstName, lastName] = fullName.split(' ')
	// let privSalary = salary; nie muszą tego nawet, wystarczy posłużyć się salary.
	return {
		firstName,
		lastName,
		getSalaryInfo() {
			return `${firstName} earns $${salary}`
		},
		makeARise(riseValue) {
			salary += riseValue;
		}
	}

	// z wykorzystaniem klasy:
	// return new Lawyer(fullName, salary)
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
const lawyerHarvey = lawyerFactory('Harvey Specter', 6000);
const lawyerMike = lawyerFactory('Michael Ross');
const lawyerRachel = lawyerFactory('Rachel Zane', 5000);
const lawyerDonna = lawyerFactory('Donna');

// odkomentuj poniższą linię, kiedy będzie już implementacja:
lawyerDonna.makeARise(5000)

assertThat(
	'Lawyer should have first and last name (just a warm up)',
	expect => expect(lawyerRachel.firstName + ' ' + lawyerRachel.lastName).toBe('Rachel Zane')
)  //=
assertThat(
	'Lawyer salary not suppose to be reviled in public !',
	expect => expect(lawyerMike.salary).toBe(undefined)
)  //=
assertThat(
	'There should be a way to know how much lawyer earns !',
	expect => expect(lawyerHarvey.getSalaryInfo()).toBe('Harvey earns $6000')
)  //=
assertThat(
	'makeARise should work and rise salary of the lawyer !',
	expect => expect(lawyerDonna.getSalaryInfo()).toBe('Donna earns $8000')
)  //=
