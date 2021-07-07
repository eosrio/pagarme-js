/**
 * @name Postback
 * @description This module exposes functions
 *              related to postback validations.
 *              This can also be found in client.security if
 *              you already used pagarme.connect to pre apply
 *              your api_key.
 *
 * @module postback
 **/
import { equals } from 'ramda';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import Hex from 'crypto-js/enc-hex';
/**
 * Generates a hash signed with a key.
 *
 * @param {String} key the keys used to sign the hash.
 *
 * @param {String} postbackBody
 *
 */
export function calculateSignature(key, postbackBody) {
    return hmacSHA1(postbackBody, key)
        .toString(Hex);
}
/**
 * Verifies a hash signed with a key.
 *
 * @param {String} key the keys used to sign the hash.
 *
 * @param {String} postbackBody The string to be hashed.
 *
 * @param {String} headerSignature The expected result.
 *
 */
export function verifySignature(key, postbackBody, headerSignature) {
    const signature = calculateSignature(key, postbackBody);
    return equals(signature, headerSignature);
}
//# sourceMappingURL=index.js.map