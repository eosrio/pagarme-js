declare namespace _default {
    export { all };
    export { create };
    export { current };
    export { destroy };
    export { find };
    export { redefinePassword };
    export { resetPassword };
    export { update };
    export { updatePassword };
}
export default _default;
/**
 * `GET /users`
 * Makes a request to /users
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} [body.count] Pagination option to get a list of users.
 *                              Number of users in a page
 * @param {Number} [body.page] Pagination option for a list of users.
 *                             The page index.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /users/`
 * Creates a user
 *
 * @param {Objec} opts An options params which
 *                     is usually already bound
 *                     by `connect` functions.
 * @param {Object} body The payload for the request.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `GET /user`
 * Returns the currently authenticated user
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created user's
 *                    data or to an error.
 */
declare function current(opts: any): Promise<any>;
/**
 * `DELETE /users/:id`
 * Deletes an user from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {String} [body.id] - The user ID. If not sent an
 *                           user list will be returned instead
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function destroy(opts: any, body: any): Promise<any>;
/**
 * `GET /users`
 * Makes a request to /users or to /users/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * @param {Number} [body.id] The user's ID. If not sent a
 *                           users list will be returned instead.
 * @param {Number} [body.count] Pagination option to get a list of users.
 *                              Number of users in a page
 * @param {Number} [body.page] Pagination option for a list of users.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `PUT /users/redefine_password`
 * Redefines a user's password based on a reset token
 *
 * @example
 *
 * client.user.redefinePassword()
 *
 * @param {Objec} opts An options params which
 *                     is usually already bound
 *                     by `connect` functions.
 * @param {Object} body An object containing the
 *                      reset token and email of
 *                      the account.
 * @returns {Promise} Resolves to the result
 *                    of the request or an error.
 */
declare function redefinePassword(opts: any, body: any): Promise<any>;
/**
 * `PUT /users/reset_password`
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param body
 *                       of which the password will
 *                       be reset.
 * @returns {Promise} Resolves to the result
 *                    of the request or an error.
 */
declare function resetPassword(opts: any, body: any): Promise<any>;
/**
 * `PUT /users/:id`
 * Updates a user from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created user's
 *                    data or to an error.
 **/
declare function update(opts: any, body: any): Promise<any>;
/**
 * `PUT /user/:id/update_password`
 * Updates a user's password from the given payload.
 *
 * @example
 *  client.user.updatePassword({ id:'123', current_password: 'foo', new_password: 'bar' })
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created user's
 *                    data or to an error.
 **/
declare function updatePassword(opts: any, body: any): Promise<any>;
