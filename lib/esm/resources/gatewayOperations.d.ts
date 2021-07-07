declare namespace _default {
    export { find };
    export { refuseMessage };
}
export default _default;
/**
 * `GET /:model/:model_id/operations`
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-todo-histórico-de-uma-transação|API Reference for this payload}
 * @param {Number} [body.id] The operation ID. If not sent,
 *                                             all operations of a
 *                                             transaction will be returned.
 * @param {Number} [body.transactionId] A transaction ID to get all
 *                                      the operations.
 * @param {Number} [body.subscriptionId] A subscription ID
*/
declare function find(opts: any, body: {
    id?: number | undefined;
    transactionId?: number | undefined;
    subscriptionId?: number | undefined;
}): any;
/**
 * `GET /:model/:model_id/operations/:id/refuse_message`
 * Returns the refuse message for a gateway operation
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * @param {Number} body.id The operation ID.
 * @param {Number} [body.subscriptionId] A subscription ID
*/
declare function refuseMessage(opts: any, body: {
    id: number;
    subscriptionId?: number | undefined;
}): Promise<any>;
