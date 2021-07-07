declare namespace _default {
    export { find };
    export { all };
    export { create };
    export { update };
}
export default _default;
/**
 * `GET /recipients`
 * Makes a request to /recipients or to /recipients/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-um-recebedor|API Reference for this payload}
 * @param {String} [body.id] The recipient ID. If not sent a
 *                           recipient list will be returned instead.
 * @param {Number} [body.count] Pagination option for recipient list.
 *                              Number of recipient in a page
 * @param {Number} [body.page] Pagination option for recipient list.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: string | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /recipients`
 * Makes a request to /recipients to get all recipients.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} [body.count] Pagination option for recipient list.
 *                              Number of recipient in a page
 * @param {Number} [body.page] Pagination option for recipient list.
 *                             The page index.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /recipients`
 * Creates a recipient from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#criando-um-recebedor|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `PUT /recipients/:id`
 * Creates a recipient from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#atualizando-um-recebedor|API Reference for this payload}
 * @param {String} body.id The recipient Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function update(opts: any, body: {
    id: string;
}): Promise<any>;
