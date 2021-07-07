declare namespace _default {
    export { find };
    export { redeliver };
}
export default _default;
/**
 * `GET /:model/:model_id/postbacks`
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-um-postback|API Reference for this payload}
 * @param {Number} [body.id] The operation ID. If not sent a
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
 * `POST /:model/:model_id/postbacks/:id/redeliver`
 * Redeliver a POSTback for a model
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#reenviando-um-postback|API Reference for this payload}
 * @param {Number} body.id The operation ID.
 * @param {Number} body.subscriptionId A subscription ID
*/
declare function redeliver(opts: any, body: {
    id: number;
    subscriptionId: number;
}): Promise<any>;
