declare namespace _default {
    export { find };
    export { all };
    export { create };
}
export default _default;
/**
 * `GET /customers`
 * Makes a request to /customers or to /customers/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#retornando-dados-do-cliente|API Reference for this payload}
 * @param {Number} [body.id] The customer ID. If not sent, a
 *                           customer list will be returned instead.
 * @param {Number} [body.count] Pagination option for customer list.
 *                              Number of customers in a page
 * @param {Number} [body.page] Pagination option for customer list.
 *                             The page index.
 */
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /customers`
 * Returns company's customers
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-clientes|API Reference for this payload}
 * @param {Number} [body.count] Pagination option to get a list of customers.
 *                              Number of customers in a page
 * @param {Number} [body.page] Pagination option for a list of customers.
 *                             The page index.
*/
declare function all(opts: any, body: {
    count?: number | undefined;
    page?: number | undefined;
}): Promise<any>;
/**
 * `POST /customers`
 * Creates a customer from the given payload
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#criando-um-cliente|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
