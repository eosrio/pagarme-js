declare namespace _default {
    export { all };
    export namespace contracts {
        export { contractsAll as all };
    }
}
export default _default;
/**
 * `GET /recipients/:id/settlements`
 * Get settlements for a specfic recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} [body.recipientId] - The ID of the recipient
 *
  *
 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `GET /recipients/:id/settlements/contracts`
 * Get settlements for a specfic recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} [body.recipientId] - The ID of the recipient
 *
  *
 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function contractsAll(opts: any, body: any): Promise<any>;
