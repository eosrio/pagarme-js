declare namespace _default {
    export { find };
    export { create };
}
export default _default;
/**
 * `GET /transactions/:transactionId/antifraud_analyses`
 * Makes a request to /transactions/:transactionId/antifraud_analyses or
 * to /transactions/:transactionId/antifraud_analyses/:id
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#retornando-uma-análise-antifraude|API Reference for this payload}
 * @param {Number} body.transactionId - A specific transaction ID
 *
 * @param {Number} [body.id] - The antifraud analyses' ID. If not sent,
 *                             a antifraud analyses list will be returned instead.
 */
declare function find(opts: any, body: {
    transactionId: number;
    id?: number | undefined;
}): any;
/**
 * `POST /transactions/:transactionId/antifraud_analyses`
 * Makes a request to /transactions/:transactionId/antifraud_analyses
 *
 * @param {Object} opts - An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body - The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#criando-uma-análise-antifraude|API Reference for this payload}
 * @param {Number} body.transactionId - A specific transaction ID
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
declare function create(opts: any, body: {
    transactionId: number;
}): Promise<any>;
