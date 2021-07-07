/// <reference types="ts-toolbelt" />
declare namespace _default {
    export { all };
    export { find };
    export { findAll };
    export { create };
    export { update };
    export { updateAnticipationDelay };
}
export default _default;
/**
 * `GET /acquirers`
 * Makes a request to /acquirers
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param pagination
 * @param {Number} [body.count] Pagination option to get a list of acquirers
 *                              Number of acquirers in a page.
 * @param {Number} [body.page] Pagination option for a list of acquirers.
 *                             The page index.
 */
declare function all(opts: any, pagination: any): Promise<any>;
/**
 * `GET /acquirers`
 * Makes a request to /acquirers or to /acquirers/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * @param {Number} [body.id]  The acquirer's ID. If not sent a
 *                            list of acquirer will be returned instead.
 * @param {Number} [body.count] Pagination option to get a list of acquirers.
 *                              Number of acquirers in a page.
 * @param {Number} [body.page] Pagination option for a list of acquirers.
 *                             The page index.
 */
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
declare const findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
/**
 * `POST /acquirers`
 * Creates an acquirer from the given payload.
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
 * `PUT /acquirers/:id`
 * Updates an acquirer from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {Number} body.id The acquirer's ID
 * @returns {Promise} A promise that resolves to
 *                    the newly created acquirer's
 *                    data or to an error.
 */
declare function update(opts: any, body: {
    id: number;
}): Promise<any>;
/**
 * `PUT /acquirers/:id/anticipation_delay/:delay`
 * Updates an acquirer anticipation from the given delay.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {Number} body.id The acquirer's ID
 * @param {Number} body.delay The acquirer's anticipation delay
 * @returns {Promise} A promise that resolves to
 *                    the newly created acquirer's
 *                    data or to an error.
 */
declare function updateAnticipationDelay(opts: any, body: {
    id: number;
    delay: number;
}): Promise<any>;
