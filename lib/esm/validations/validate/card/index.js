import { __, ap, apply, applySpec, has, not, omit, pipe, prop, } from 'ramda';
import brand from './brand';
import cvv from './cvv';
import cardNumber from './cardNumber';
import date from './date';
import holder from './holder';
const validProps = [
    'card_holder_name',
    'card_number',
    'card_expiration_date',
    'card_cvv',
];
const missingProps = (card) => {
    const missing = pipe(has(__, card), not);
    return validProps.filter(missing);
};
const hasCardNumber = has('card_number');
// @ts-ignore
const validDate = pipe(prop('card_expiration_date'), date);
// @ts-ignore
const validHolder = pipe(prop('card_holder_name'), holder);
// @ts-ignore
const validCardNumber = pipe(prop('card_number'), cardNumber);
// @ts-ignore
const validCvv = brandName => pipe(prop('card_cvv'), cvv(brandName));
// @ts-ignore
const getBrand = pipe(prop('card_number'), brand);
const validateAll = card => applySpec({
    brand: getBrand,
    card_holder_name: validHolder,
    card_number: validCardNumber,
    card_expiration_date: validDate,
    // @ts-ignore
    card_cvv: validCvv(getBrand(card)),
    // @ts-ignore
})(card);
// @ts-ignore
const validateExistentProps = card => apply(omit, ap([missingProps, validateAll], [card]));
const validate = (card) => {
    if (hasCardNumber(card)) {
        return validateExistentProps(card);
    }
    throw new Error('Missing card number');
};
export default validate;
//# sourceMappingURL=index.js.map