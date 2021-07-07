declare namespace _default {
    export { find };
    export { all };
    export { create };
    export { destroy };
}
export default _default;
/**
 * `GET /invites`
 * Makes a request to /invites or to /invites/:id
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * @param {String} [body.id] - The invite ID. If not sent an
 *                           invite list will be returned instead
 */
declare function find(opts: any, body?: {
    id?: string | undefined;
}): any;
/**
 * `GET /invites`
 * Makes a request to /invites to get all invites.
 *
*/
declare function all(opts: any): Promise<any>;
/**
 * `POST /invites`
 * Creates an invite from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body A payload that contains
 *                      email and permission
 *                      of the invited person.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `DELETE /invites`
 * Deletes an invite from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {String} [body.id] - The invite ID. If not sent an
 *                           invite list will be returned instead
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function destroy(opts: any, body: any): Promise<any>;
