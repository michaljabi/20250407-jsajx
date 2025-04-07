
import { addNumbers, averageFrom } from './main/helpers/my-things.js';
import { firstLetterToUpper } from './main/tools/tool-1.js';
import { countWords } from './main/tools/tool-2.js';
import wordHelper, { toSecondPower } from './main/utils/some-util.js';

export const stringHelper = {
    lastLetter: wordHelper.lastLetter,
    numberOfChars: wordHelper.numberOfChars,
    countWords: countWords,
    capitalize: firstLetterToUpper
}

export const numberHelper = {
    addNumbers: addNumbers,
    averageFrom: averageFrom,
    toSecondPower: toSecondPower,
}