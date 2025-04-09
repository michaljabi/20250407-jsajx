import { assertThat } from '../../j4b1-assert.js'
import { capitalize } from './d10-1st-filter-map-reduce-warm-up.js'
/**
 * d10-filter-map-reduce
 * Challenge
 *
 *  W naszej złożonej aplikacji część komponentów, potrzebuje danych w specjalnej formie,
 *  aby je poprawnie wyświetlić.
 *
 *  Postaraj się wykorzystać programowanie funkcyjne do osiągnięcia odpowiedniego formatu danych,
 *  tak aby każdy z komponentów mógł je obsługiwać.
 *
 * * Reguły:
 * - nie zmieniaj danych które przychodzą z pseud-backendu bezpośrednio na tablicy (nie ruszaj backendApiRequest)
 * - w przestrzeni tego scope muszą się zanjdować showNamesOnly, showWomanNamesOnly, showEmailsWithDomainSiteCom
 *   zawierające odpowiednio tablice z wynikami działań.
 * - zastosuj odpowiednie metody tablicowe aby uzyskać wyniki.
 */

// Nie zmieniaj tego kodu:
const backendApiRequest = () => [
	'adrian@site.com',
	'stefan@site.com',
	'jadwiga@domain.pl',
	'henryka@domain.pl',
	'anna@site.com'
];
const emailData = backendApiRequest();

const isAWomanName = name => name.at(-1)?.toLowerCase() === 'a';
const splitEmail = email => email.split('@');
const splitWith = char => word => word.split(char);

const endsWithSiteCom = word => word.endsWith('site.com')
const endsWith = (domain) => (word) => word.endsWith(domain);

// inny widok tego samego:
function endsWith2(domain) {
	return function (word) {
		return word.endsWith(domain)
	}
}

// function twoParams(domain, word) {
// 	console.log(word)
// 	return word.endsWith(domain)
// }

// Tutaj możesz pisać:
const showNamesOnly = emailData.map(splitWith('@')).map(([name]) => name).map(capitalize);
const showWomanNamesOnly = showNamesOnly.filter(isAWomanName);
const showEmailsWithDomainSiteCom = emailData.filter(endsWith('site.com'))
const showEmailsWithDomainPl = emailData.filter(endsWith('domain.pl'))

console.log(showEmailsWithDomainPl)

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'First component should consume data as Capitalized names',
	expect => expect(showNamesOnly).toEqual(['Adrian', 'Stefan', 'Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Second component should consume data as Woman names only',
	expect => expect(showWomanNamesOnly).toEqual(['Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Third component should have @site.com emails as data provided',
	expect => expect(showEmailsWithDomainSiteCom).toEqual(['adrian@site.com', 'stefan@site.com', 'anna@site.com'])
)  //=
