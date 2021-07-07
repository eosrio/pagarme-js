/// <reference types="ts-toolbelt" />
declare namespace _default {
    export { all };
    export { find };
    export { findAll };
    export { create };
    export { update };
}
export default _default;
/**
 * `GET /acquirers_configurations`
 * Makes a request to /acquirers_configurations
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param pagination
 * @param {Number} [body.count] Pagination option to get a list of acquirer's
 *                              configurations.
 *                              Number of configurations in a page
 * @param {Number} [body.page] Pagination option for a list of acquirer's
 *                             configurations.
 *                             The page index.
 */
declare function all(opts: any, pagination: any): Promise<any>;
/**
 * `GET /acquirers_configurations`
 * Makes a request to /acquirers_configurations or to /acquirers_configuration/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * @param {Number} [body.id]  The acquirer's configuration ID. If not sent a
 *                            list of acquirer's configuration will be returned instead.
 * @param {Number} [body.count] Pagination option to get a list of acquirer's
 *                              configurations.
 *                              Number of configurations in a page
 * @param {Number} [body.page] Pagination option for a list of acquirer's
 *                             configurations.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
declare const findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
/**
 * `POST /acquirers_configurations`
 * Creates an acquirer's configuration from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `PUT /acquirers_configuration/:id`
 * Updates an acquirer's configuration from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {Number} body.id The acquirer's configuration ID
 * @returns {Promise} A promise that resolves to
 *                    the newly created acquirer's configurations
 *                    data or to an error.
 */
declare function update(opts: any, body: {
    id: number;
}): Promise<any>;
