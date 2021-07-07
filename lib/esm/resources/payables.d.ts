declare namespace _default {
    export { find };
    export { all };
    export { days };
}
export default _default;
/**
 * `GET /payables`
 * Makes a request to /payables or to /payables/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-um-recebível|API Reference for this payload}
 * @param {Number} [body.id] The payable ID. If not sent a
 * @param {Number} [body.transactionId] A transaction ID to get all
 *                                      the payables.
 * @param {Number} [body.count] Pagination option for transaction list.
 *                              Number of transaction in a page
 * @param {Number} [body.page] Pagination option for transaction list.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    transactionId?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /payables`
 * Makes a request to /payables
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://docs-beta.pagar.me/v1/reference#retornando-recebíveis}
*/
declare function all(opts: any, body: any): Promise<any>;
/**
 * `GET /payables/days`
 * Returns a company's payables  aggregated by day
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 */
declare function days(opts: any, body: any): Promise<any>;
