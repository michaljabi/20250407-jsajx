import { assertThat } from '../../j4b1-assert.js'
/**
 * b70-error-catching
 * Warm up
 *
 * Napraw kod, tak test u dołu "zapalił się na zielono"
 *
 * * Reguły:
 * - można dopisywać nowy kod.
 * - nie można zmieniać istniejącego kodu.
 */

try {
	JSON.parse('{ ; }') //=
	console.log('I will not run...')
} catch (e) {
	console.log(e.message);
} finally {
	console.log('I will ALWAYS run')
}

let superInvention = 'What was the last one? Oh yes. ';

try {
	somethingThatWillAlwaysBeBroken(true);
} catch (e) {
	console.log(e.message)
}


superInvention += 'A ladder, to help moths escape from the bath.';

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
function somethingThatWillAlwaysBeBroken(breakIt) {
	if (breakIt) {
		throw new Error('You shall not pass!');
	}
}

assertThat(
	'superInvention sentence should be present with the invention in it.',
	expect => expect(superInvention).toBe('What was the last one? Oh yes. A ladder, to help moths escape from the bath.')
)  //=
