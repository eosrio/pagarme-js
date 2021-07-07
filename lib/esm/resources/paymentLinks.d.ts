declare namespace _default {
    export { find };
    export { all };
    export { create };
    export { cancel };
}
export default _default;
/**
 * `GET /payment_links`
 * Makes a request to /payment_links or to /payment_links/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://docs.pagar.me/v2017-08-28/reference#retornando-links-de-pagamento|API Reference for this payload}
 * @param {Number} [body.id] The paymentLink ID. If not sent a
 *                           paymentLink list will be returned instead.
 * @param {Number} [body.count] Pagination option for paymentLink list.
 *                              Number of paymentLink in a page
 * @param {Number} [body.page] Pagination option for paymentLink list.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /payment_links`
 * Makes a request to /payment_links to get all paymentLinks.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} [body.count] Pagination option for paymentLink list.
 *                              Number of paymentLink in a page
 * @param {Number} [body.page] Pagination option for paymentLink list.
 *                             The page index.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /payment_links`
 * Creates a paymentLink from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://docs.pagar.me/v2017-08-28/reference#criando-um-link-de-pagamento-1|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `POST /payment_links/:id/cancel`
 * Cancels a paymentLink from the given id.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} body.id The paymentLink ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function cancel(opts: any, body: any): Promise<any>;
