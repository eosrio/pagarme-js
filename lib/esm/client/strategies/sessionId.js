/**
 * @name sessionId
 * @memberof strategies
 * @private
 */
import { reject, resolve } from 'bluebird';
import { mergeRight } from 'ramda';
import transactions from '../../resources/transactions';
/**
 * Creates an object with
 * the `session_id` from
 * the supplied `options` param
 *
 * @param sessionId
 * @param environment
 * @param impersonationKey
 * @param sessionId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param sessionId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param sessionId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param {any} options
 * @param skipAuthentication
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `session_id`
 * @private
 */
function execute({ session_id: sessionId, environment, impersonationKey, options, skipAuthentication, }) {
    const headers = environment === 'live'
        ? { 'X-Live': 1 }
        : {};
    const body = {
        session_id: sessionId,
    };
    if (impersonationKey) {
        body.impersonation_key = impersonationKey;
    }
    const opts = mergeRight(options, {
        body,
        headers,
    });
    return transactions.calculateInstallmentsAmount(opts, { amount: 1, interest_rate: 100 })
        .catch(error => (skipAuthentication ? resolve(opts) : reject(error)))
        .catch({ name: 'ApiError' }, () => reject(new Error('You must supply a valid session id')))
        .then(() => ({
        authentication: { session_id: sessionId },
        options: opts,
    }));
}
/**
 * Returns the supplied parameter with
 * the `execute` function added to it.
 *
 * @param {any} options
 * @returns {Object} The `options` parameter
 *                   with `execute` add to it
 * @private
 */
function build(options) {
    return mergeRight(options, { execute: execute.bind(null, options) });
}
export default {
    build,
};
//# sourceMappingURL=sessionId.js.map