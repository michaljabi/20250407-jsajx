import { assertThat } from '../../j4b1-assert.js'
/**
 * e20-promise-to-escape-from-callback
 *
 * Wiemy już że świat nie jest kolorowy,
 * Nasza najnowsza wersja lib'a do Ajax'a - musi być nowoczesna
 *
 * Dzięki za pomoc z callbacks, jednak w wersji 0.3.1
 * Chcemy przejść z obsługi callbacks na - promises!
 *
 * * Reguły:
 * - Kod zmieniaj tylko w środku implementacji getJSON()
 */

function getNumber() {
	return 80;
}

console.log(getNumber())

async function getAsyncNumber(checkCondition) {

	if (!checkCondition) {
		throw new Error('THROWN !');
	}
	return 80;
}

const value = await getAsyncNumber(true);
console.log(value);

; (async () => {
	try {
		const value = await getAsyncNumber(true);
		console.log(value);
	} catch (e) {
		console.log(e.message);
	}
})();


console.log(getAsyncNumber())
getAsyncNumber(true).then((value) => {
	console.log(value);
})

const DZej = {
	getJSON(url) {
		// #Reguła:
		// Kodzik można pisać i zmieniać tylko w tym bloku.
		if (url.endsWith('/it')) {
			return Promise.resolve({ message: 'did you try?' })
		}
		return Promise.reject({ status: 404, message: 'Invalid URL!' })
	},
	getJSON(url) {
		return new Promise((resolve, reject) => {
			if (url.endsWith('/it')) {
				resolve({ message: 'did you try?' })
			} else {
				reject({ status: 404, message: 'Invalid URL!' })
			}
		})
	},
	async getJSON(url) {
		if (url.endsWith('/it')) {
			return { message: 'did you try?' }
		}
		throw { status: 404, message: 'Invalid URL!' }
	}
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
DZej.getJSON('https://reynholm-industries.com/it').then((ajaxResult) => {
	assertThat(
		'Should resolve with did you try message - object',
		expect => expect(ajaxResult).toEqual({ message: 'did you try?' })
	)//=
})

DZej.getJSON('https://reynholm-industries.com/not-existing').catch(err => {
	assertThat(
		'should reject with error',
		expect => expect(err).toEqual({ status: 404, message: 'Invalid URL!' })
	)//=
})

