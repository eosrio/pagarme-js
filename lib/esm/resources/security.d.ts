declare namespace _default {
    export { encrypt };
    export { sign };
    export { verify };
}
export default _default;
/**
 * Encrypt a card object into a card_hash
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} card The card object.
 * {@link https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente|API Reference for this payload}
 *
 * @param {String} card.card_number The card's number.
 *                             Example: '4111111111111111'
 * @param {String} card.card_holder_name The card's holder name.
 *                             Example: 'Pedro Paulo'
 * @param {String} card.card_expiration_date The card's expiration date.
 *                             Example: '1225' or '12/25'
 * @param {String} card.card_cvv The card's cvv.
 *                             Example: '543'
 */
declare function encrypt(opts: any, card: {
    card_number: string;
    card_holder_name: string;
    card_expiration_date: string;
    card_cvv: string;
}): Promise<string>;
/**
 * Generates a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.calculatesignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
 */
declare function sign(opts: any, string: string): any;
/**
 * Verifies a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.validateSignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
 * @param {String} expected The expected result.
 *
 */
declare function verify(opts: any, string: string, expected: string): boolean;
