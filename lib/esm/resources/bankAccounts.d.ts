declare namespace _default {
    export { all };
    export { create };
    export { find };
}
export default _default;
/**
 * `GET /bank_accounts`
 * Makes a request to /bank_accounts
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-várias-contas-bancárias|API Reference for this payload}
 * @param {Number} [body.count] - Pagination option for a bank account list.
 *                                Number of bank accounts in a page
 * @param {Number} [body.page] - Pagination option for bank account list.
 *                               The page index.
*/
declare function all(opts: any, body: {
    count?: number | undefined;
    page?: number | undefined;
}): Promise<any>;
/**
 * `POST /bank_accounts`
 * Creates a bank account from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#criando-uma-conta-bancária|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `GET /bank_accounts`
 * Makes a request to /bank_accounts or to /bank_accounts/:id
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-uma-conta-bancária|API Reference for this payload}
 * @param {Number} [body.id] - The bankAccount ID. If not sent a
 *                             bankAccounts list will be returned instead.
 * @param {Number} [body.count] - Pagination option for a bank account list.
 *                                Number of bank accounts in a page
 * @param {Number} [body.page] - Pagination option for bank account list.
 *                               The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
