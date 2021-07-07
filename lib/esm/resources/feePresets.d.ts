declare namespace _default {
    export { find };
}
export default _default;
/**
 * `GET /fee_presets/:id`
 * Returns the requested fee preset.
 *
 * @param {Object} opts   An options params which
 *                        is usually already bound
 *                        by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {String} body.id The fee preset ID
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function find(opts: any, body: {
    id: string;
}): Promise<any>;
