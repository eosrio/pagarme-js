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
 * `GET /plans`
 * Makes a request to /plans
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param pagination
 * {@link https://pagarme.readme.io/v1/reference#retornando-planos|API Reference for this payload}
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
 */
declare function all(opts: any, pagination: any): Promise<any>;
/**
 * `GET /plans`
 * Makes a request to /plans or to /plans/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-um-plano|API Reference for this payload}
 * @param {Number} [body.id] The plan's ID. If not sent a
 *                           plans list will be returned instead.
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
declare const findAll: import("Function/Curry").Curry<(opts: any, pagination: any) => Promise<any>>;
/**
 * `POST /plans`
 * Creates a plan from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#criando-planos|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `PUT /plans/:id`
 * Updates a plans from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#atualizando-planos|API Reference for this payload}
 * @param {Number} body.id The plan's ID
 * @param {String} [body.name] The plan's name
 * @param {Number} [body.trial_days] The number of days to test the plan with
 *                                   no charges
 * @returns {Promise} A promise that resolves to
 *                    the newly created plans's
 *                    data or to an error.
 */
declare function update(opts: any, body: {
    id: number;
    name?: string | undefined;
    trial_days?: number | undefined;
}): Promise<any>;
