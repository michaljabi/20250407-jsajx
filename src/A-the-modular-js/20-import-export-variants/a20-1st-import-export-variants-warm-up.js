import { assertThat } from '../../j4b1-assert.js'
import mySecretConstant, { mySecretConstant2 } from './a20-1st-helper.js'
// import { coffees, coffeeName, COFFEE_NAMED } from './a20-import-export-variants/my-sweet-coffee-importer.js';

// coffees

// import {} from 'https://' // jeszcze nie w node.js

/**
 * a20-import-export-variants
 * Warm up
 *
 * Napraw kod wykorzystując plik ./a20-helper.js
 *
 * * Reguły:
 * - nie możesz edytować istniejącego kodu
 * - możesz usuwać istniejący kod
 * - musisz wykorzystać plik ./a20-1st-helper
 * - możesz dodawać kod w obydwu plikach - jednak wykluczając słowa kluczowe: let, const
 */

// const mySecretConstant = 'wrong way!';
console.log(mySecretConstant2);
// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'it should have secret value from other ./a20-1st-helper file',
	expect => expect(mySecretConstant).toBe('HELLO $ecr3t...')
)  //=
