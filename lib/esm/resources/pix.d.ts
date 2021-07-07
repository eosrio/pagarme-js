declare namespace _default {
    export { create };
    export { all };
}
export default _default;
/**
 * `POST /pix/key`
 * Creates a pix from the given payload.
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
* `GET /pix/keys`
* Makes a request to /pix/keys
*
* @param {Object} opts - An options params which
*                      is usually already bound
*                      by `connect` functions.
*
*/
declare function all(opts: any): Promise<any>;
