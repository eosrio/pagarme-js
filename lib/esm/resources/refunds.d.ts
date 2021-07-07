/// <reference types="ts-toolbelt" />
declare namespace _default {
    export { cancel };
    export { find };
}
export default _default;
/**
 * `POST /refunds/:id/cancel`
 * Makes a request to /refunds/:id/cancel
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * @param {String} [body.id] - The ID of the refund to be canceled
 */
declare const cancel: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
/**
 * `GET /refunds`
 * Makes a request to /refunds
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * @param {String} [body.transaction_id] - The refunded transaction ID
 * @param {String} [body.local_transaction_id] - The refunded transaction external ID
 * @param {String} [body.metadata] - Metadata used for the refund
 * @param {String} [body.date_created] - Refund creation date
 * @param {String} [body.date_updated] - Refund update date
 */
declare const find: import("Function/Curry").Curry<(opts: any, body: any) => Promise<any>>;
