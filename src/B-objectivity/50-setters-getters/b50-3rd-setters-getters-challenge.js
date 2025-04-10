import { assertThat } from '../../j4b1-assert.js'
/**
 * b50-setters-getters
 * Challenge
 *
 * Chcemy naprawić nasz stary zegar z kukułką w nowoczesnym postmodernistycznym stylu.
 * Wbudowaliśmy już nowy licznik LCD z podziałką.
 *
 * Jednak trochę się to rozjeżdża
 * godziny, sekundy i minuty - nie wyświetla się poprawnie podsumowanie czasu na LCD.
 *
 * Z kolei jeśli ustawimy LCD na godzinę np. 23:33:59 - wskazówki nie aktualizują się
 *
 * Help me Obi Clock Kenobi! You're My Only Hope
 *
 * * Reguły:
 * - Możesz pisać kodzik tylko w instancji `vintageCuckooClock`
 */

let x = 10;
const y = 20;

'9'.padStart(2, '0'); //=
'19'.padStart(2, '0'); //=
'21'.padStart(2, '0'); //=
'1'.padStart(2, '0'); //=
''.padStart(2, '0'); //=

const vintageCuckooClock = {
	// #Reguła:
	// Kodzik można pisać tylko tutaj w środku.
	hours: 20,
	minutes: 11,
	seconds: 44,
	get lcdTime() {
		const { hours, minutes, seconds } = this;
		return [hours, minutes, seconds].join(':')
	},
	set lcdTime(strTime) {
		const [hours, minutes, seconds] = strTime.split(':').map(Number);
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
	}
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Should show properly formatted time for 20:11:44',
	expect => expect(vintageCuckooClock.lcdTime).toBe('20:11:44')
)  //=
vintageCuckooClock.hours = 15;
vintageCuckooClock.minutes = 10;
vintageCuckooClock.seconds = 50;
assertThat(
	'Should show properly changed time for 15:10:50',
	expect => expect(vintageCuckooClock.lcdTime).toBe('15:10:50')
)  //=

vintageCuckooClock.lcdTime = '23:33:59';
assertThat(
	'Should work for settled time',
	expect => expect(vintageCuckooClock.lcdTime).toBe('23:33:59')
)  //=
assertThat(
	'Should work for settled time hours',
	expect => expect(vintageCuckooClock.hours).toBe(23)
)  //=
assertThat(
	'Should work for settled time minutes',
	expect => expect(vintageCuckooClock.minutes).toBe(33)
)  //=
assertThat(
	'Should work for settled time seconds',
	expect => expect(vintageCuckooClock.seconds).toBe(59)
)  //=


// y + 10;