declare namespace _default {
    export { find };
    export { all };
    export { days };
}
export default _default;
/**
 * `GET /balance/operations`
 * Makes a request to /balance/operations,
 * /balance/operations/:id,
 * /recipients/:recipient_id/balance/operations/ or
 * /recipients/:recipient_id/balance/operations/:id
 * and returns company's balanceOperations or returns a specif company's balanceOperation
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#histórico-específico-de-uma-operação|API Reference for this payload}
 * @param {Number} [body.id] The operations's ID. If not sent a
 *                           operations list will be returned instead.
 * @param {Number} [body.recipientId] The recipient's ID.
 * @param {String} [body.format] The file extension.
 * @param {Number} [body.count] Pagination option to get a list of operations.
 *                              Number of operations in a page
 * @param {Number} [body.page] Pagination option for a list of operations.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    recipientId?: number | undefined;
    format?: string | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /balance/operations`
 * Returns company's balanceOperations
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param pagination
 * {@link https://pagarme.readme.io/v1/reference#histórico-das-operações|API Reference for this payload}
 * @param {Number} [body.count] Pagination option to get a list of operations.
 *                              Number of operations in a page
 * @param {Number} [body.page] Pagination option for a list of operations.
 *                             The page index.
 */
declare function all(opts: any, pagination: any): Promise<any>;
/**
 * `GET /balance/operations/days`
 * Returns a company's balanceOperations aggregated by day
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 */
declare function days(opts: any, body: any): Promise<any>;
