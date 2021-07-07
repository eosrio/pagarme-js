declare namespace _default {
    export { find };
    export { all };
    export { capture };
    export { create };
    export { refund };
    export { collectPayment };
    export { cardHashKey };
    export { update };
    export { calculateInstallmentsAmount };
    export { reprocess };
}
export default _default;
/**
 * `GET /transactions`
 * Makes a request to /transactions or to /transactions/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/reference#retornando-transações|API Reference for this payload}
 * @param {Number} [body.id] The transaction ID. If not sent a
 *                           transaction list will be returned instead.
 * @param {Number} [body.count] Pagination option for transaction list.
 *                              Number of transaction in a page
 * @param {Number} [body.page] Pagination option for transaction list.
 *                             The page index.
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    count?: number | undefined;
    page?: number | undefined;
}): any;
/**
 * `GET /transactions`
 * Makes a request to /transactions to get all transactions.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} [body.count] Pagination option for recipient list.
 *                              Number of recipient in a page
 * @param {Number} [body.page] Pagination option for recipient list.
 *                             The page index.
 */
declare function all(opts: any, body: any): Promise<any>;
/**
 * `POST /transactions/:id/capture`
 * Captures a transaction from the given id.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} body.id The transaction ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function capture(opts: any, body: any): Promise<any>;
/**
 * `POST /transactions`
 * Creates a transaction from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/reference#criar-transação|API Reference for this payload}
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: any): Promise<any>;
/**
 * `POST /transactions/:id/refund`
 * Refunds a transaction from the given id.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/reference#estorno-de-transação|API Reference for this payload}
 *
 * @param {Number} body.id The transaction ID.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function refund(opts: any, body: {
    id: number;
}): Promise<any>;
/**
 * `POST /transactions/:id/collect_payment`
 * Sends a payment link to a customer
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/reference#notificando-cliente-sobre-boleto-a-ser-pago|API Reference for this payload}
 * @param {Number} body.id - The transaction id
 * @param {String} body.email - User email to send the
 *                              payment request
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function collectPayment(opts: any, body: {
    id: number;
    email: string;
}): Promise<any>;
/**
 * `GET /transactions/card_hash_key`
 * Create a card hash key
 *
 * @param {Object} opts - An options params which
 *                        is usually already bound
 *                        by `connect` functions.
 *
 * {@link https://dash.readme.io/project/pagarme/v1/refs/gerando-card_hash-manualmente-1|API Reference for this payload}
 *
 * @returns {Promise} - Resolves to the result of
 *                      the request or to an error.
 */
declare function cardHashKey(opts: any): Promise<any>;
/**
 * `PUT /transactions/:id`
 * Updates a transaction from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 *
 * @param {Number} body.id The transaction ID
 * @param {Number} body.status The transaction status
 * @returns {Promise} A promise that resolves to
 *                    the newly created transactions's
 *                    data or to an error.
 **/
declare function update(opts: any, body: {
    id: number;
    status: number;
}): Promise<any>;
/**
 * `GET /transactions/calculate_installments_amount`
 * Calculates the value of each purchase's installments
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} body.interest_rate - The interest rate's value.
 * @param {Number} body.amount - The value of the purchase.
 * @param {Number} [body.max_installments] - The max number of installments.
 * @param {Number} [body.free_installments] - The number of installments without interest.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function calculateInstallmentsAmount(opts: any, body: any): Promise<any>;
/**
 * `POST /transactions/:id/reprocess`
 * Reprocess a transaction from the given id.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param body
 * @param {Number} body.id The transaction ID.
 * @param {Boolean} body.capture Should capture
 *                               the transaction.
 * @param {Boolean} body.analyze Should analyze
 *                               the transaction.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function reprocess(opts: any, body: any): Promise<any>;
