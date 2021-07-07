declare namespace _default {
    export { find };
    export { all };
    export { create };
    export { update };
    export { destroy };
    export { limits };
    export { days };
    export { confirm };
    export { cancel };
}
export default _default;
/**
 * `GET /recipients/:recipient_id/bulk_anticipations`
 * Makes a request to /recipients/:recipient_id/bulk_anticipations
 * or to /recipients/:recipient_id/bulk_anticipations/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-todas-as-antecipações|API Reference for this payload}
 * @param {String} body.recipientId The recipient ID.
 * @param {String} [body.id] The bulkAnticipation ID. If not sent a
 *                           bulkAnticipation list will be returned instead.
 * @param {Number} [body.count] Pagination option for bulkAnticipation list.
 *                              Number of bulkAnticipation in a page
 * @param {Number} [body.page] Pagination option for bulkAnticipation list.
 *                             The page index.
*/
declare function find(opts: any, body: {
    recipientId: string;
    id?: string | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /recipients/:recipient_id/bulk_anticipations`
 * Creates a bulkAnticipation from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#criando-uma-antecipação|API Reference for this payload}
 * @param {String} body.recipientId The recipient ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: {
    recipientId: string;
}): Promise<any>;
/**
 * `PUT /recipients/:recipient_id/bulk_anticipations/:id`
 * Updates a bulkAnticipation from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient ID.
 * @param {String} body.id The bulkAnticipation Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function update(opts: any, body: {
    recipientId: string;
    id: string;
}): Promise<any>;
/**
 * `DELETE /recipients/:recipient_id/bulk_anticipations/:id`
 * Deletes a bulkAnticipation.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#deletando-uma-antecipação-building|API Reference for this payload}
 * @param {String} body.recipientId The recipient ID.
 * @param {String} body.id The bulkAnticipation Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function destroy(opts: any, body: {
    recipientId: string;
    id: string;
}): Promise<any>;
/**
 * `GET /recipients/:recipient_id/bulk_anticipations/limits`
 * Get bulk anticipations limits for a recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#obtendo-os-limites-de-antecipação|API Reference for this payload}
 * @param {String} body.recipientId The recipient ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function limits(opts: any, body: {
    recipientId: string;
}): Promise<any>;
/**
 * `GET /recipients/:recipient_id/bulk_anticipations/:id/days`
 * Get bulk anticipations days.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient ID.
 * @param {String} body.id The bulkAnticipation Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function days(opts: any, body: {
    recipientId: string;
    id: string;
}): Promise<any>;
/**
 * `POST /recipients/:recipient_id/bulk_anticipations/:id/confirm`
 * Confirm a bulk anticipation.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * {@link https://pagarme.readme.io/v1/reference#confirmando-uma-antecipação-building|API Reference for this payload}
 * @param {String} body.recipientId The recipient ID.
 * @param {String} body.id The bulkAnticipation Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function confirm(opts: any, body: {
    recipientId: string;
    id: string;
}): Promise<any>;
/**
 * `POST /recipients/:recipient_id/bulk_anticipations/:id/cancel`
 * Cancel a bulk anticipation.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient ID.
 * @param {String} body.id The bulkAnticipation Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function cancel(opts: any, body: {
    recipientId: string;
    id: string;
}): Promise<any>;
