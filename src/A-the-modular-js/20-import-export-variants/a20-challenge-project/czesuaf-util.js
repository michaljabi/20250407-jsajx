
import { addNumbers, averageFrom } from './main/helpers/my-things.js';
import { firstLetterToUpper as capitalize } from './main/tools/tool-1.js';
import { countWords } from './main/tools/tool-2.js';
import wordHelper, { toSecondPower } from './main/utils/some-util.js';

const { lastLetter, numberOfChars } = wordHelper;

export const stringHelper = {
    lastLetter,
    numberOfChars,
    countWords,
    capitalize
}

export const numberHelper = {
    addNumbers,
    averageFrom,
    toSecondPower,
}