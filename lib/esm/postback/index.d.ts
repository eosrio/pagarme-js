/**
 * Generates a hash signed with a key.
 *
 * @param {String} key the keys used to sign the hash.
 *
 * @param {String} postbackBody
 *
 */
export declare function calculateSignature(key: any, postbackBody: any): any;
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
export declare function verifySignature(key: any, postbackBody: any, headerSignature: any): boolean;
