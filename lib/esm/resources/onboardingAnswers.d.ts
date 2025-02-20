declare namespace _default {
    export { all };
    export { create };
    export { destroy };
}
export default _default;
/**
 * `GET /onboarding_answers`
 * Makes a request to /onboarding_answers to get all answers
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /onboarding_answers`
 * Creates a onboarding answer from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `DELETE /onboarding_answers/:id`
 * Deletes an onboarding answer
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {String} [body.id] - The onboarding answer ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function destroy(opts: any, body: any): Promise<any>;
