declare namespace _default {
    export { find };
}
export default _default;
/**
 * Finds and resolves to a builder
 * function for authentication
 * according to the supplied object.
 *
 * @param {Object} options The object containing
 *                         the authentication data
 * @returns {Promise} Resolves to either the
 *                    correct builder function
 *                    or rejects with an Error.
 */
declare function find(options: any): Promise<any>;
