import { __, last, modulo, pipe, replace, toString, addIndex, reduceRight, eqBy, juxt, init, sum, split, } from 'ramda';
const reduceRightIndexed = addIndex(reduceRight);
const clean = replace(/[^0-9]/g, '');
const mask = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0];
const sameParity = eqBy(modulo(__, 2));
const finalSumReducer = (acc, digit, index, digits) => acc + (sameParity(digits.length - 1, index) ? mask[digits[index]] : 0);
const validate = (cardNumber) => {
    console.log(cardNumber);
    const [withoutLastDigit, lastDigit] = juxt([init, last])(cardNumber);
    console.log(withoutLastDigit, lastDigit);
    // @ts-ignore
    const finalSum = reduceRightIndexed(finalSumReducer, sum(withoutLastDigit), split('', withoutLastDigit));
    console.log(finalSum);
    // @ts-ignore
    const rest = 10 - (finalSum % 10);
    console.log(rest);
    // @ts-ignore
    const final = (rest === 10 ? 0 : rest) === parseInt(lastDigit, 10);
    console.log(final);
    return final;
};
export default pipe(toString, clean, validate);
//# sourceMappingURL=cardNumber.js.map