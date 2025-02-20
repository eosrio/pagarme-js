declare namespace _default {
    export { find };
    export { findCustom };
}
export default _default;
/**
 * `GET /:model/:model_id/events`
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-todos-os-eventos-de-uma-transação|API Reference for this payload}
 * @param {Number} [body.id] The event ID. If not sent a
 * @param {Number} [body.transactionId] A transaction ID to get all
 *                                      the events.
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
 * `GET /events`
 * Makes a request to /events
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
*/
declare function findCustom(opts: any, body: any): Promise<any>;
