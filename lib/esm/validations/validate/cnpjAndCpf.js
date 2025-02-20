import { __, addIndex, allPass, ap, apply, both, complement, equals, either, isEmpty, length, map, modulo, multiply, nth, pipe, replace, split, subtract, sum, take, toString, when, } from 'ramda';
// CNPJ = String of length 14
// CPF = String of length 11
// ID = CNPJ or CPF
// RAW_ID = ID before special characters cleanup
// DIGIT = Number from 0 to 9
const repeatedNumberRegex = /^(.)\1+$/;
const mapIndexed = addIndex(map);
const weightMasks = {
    // for cpf
    9: [10, 9, 8, 7, 6, 5, 4, 3, 2],
    10: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    // for cnpj
    12: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    13: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
};
// String -> String
const clean = replace(/[^\d]+/g, '');
// [String] -> ID -> Boolean
const hasOnlyOneNumber = subject => repeatedNumberRegex.test(subject);
// ID -> Boolean
const hasValidForm = complement(either(isEmpty, hasOnlyOneNumber));
// [Number] -> ID -> DIGIT
// @ts-ignore
const generateDigitWithMask = mask => pipe(take(length(mask)), split(''), mapIndexed((el, i) => el * mask[i]), sum, multiply(__, 10), modulo(__, 11), when(equals(__, 10), subtract(10, __)));
// Number -> ID -> DIGIT
// @ts-ignore
const digit = index => pipe(nth(index), Number);
// Number -> ID -> Boolean
// @ts-ignore
const validateDigit = index => subject => apply(equals, ap([digit(index), generateDigitWithMask(weightMasks[index], index)], [subject]));
// [Number] -> ID -> [Number] -> ID -> Boolean
// @ts-ignore
const validateDigits = pipe(ap([validateDigit]), allPass);
// [Number] -> ID -> Boolean
// @ts-ignore
const validateId = indexes => pipe(toString, clean, both(hasValidForm, validateDigits(indexes)));
// ID -> Boolean
export const cnpj = validateId([12, 13]);
// ID -> Boolean
export const cpf = validateId([9, 10]);
//# sourceMappingURL=cnpjAndCpf.js.map