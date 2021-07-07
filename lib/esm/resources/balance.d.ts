declare namespace _default {
    export { primary };
    export { find };
}
export default _default;
/**
 * `GET /balance`
 * Returns company's balance
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
*/
declare function primary(opts: any): Promise<any>;
/**
 * `GET /recipients/:id/balance`
 * Returns the balance of a recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function find(opts: any, body: {
    recipientId: string;
}): Promise<any>;
