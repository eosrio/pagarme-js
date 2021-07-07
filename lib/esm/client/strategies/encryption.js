/**
 * @name encryption
 * @memberof strategies
 * @private
 */
import { reject, resolve } from 'bluebird';
import { merge, mergeRight } from 'ramda';
import transactions from '../../resources/transactions';
/**
 * Creates an object with
 * the `encryption_key` from
 * the supplied `options` param
 *
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `encryption_key`
 * @private
 * @param opts
 */
function execute(opts) {
    const { encryption_key: encryptionKey, options } = opts;
    const payload = merge({
        body: {
            encryption_key: encryptionKey,
        },
    }, options && options.baseURL ? { baseURL: options.baseURL } : {});
    return transactions.calculateInstallmentsAmount(payload, { amount: 1, interest_rate: 100 })
        .catch(error => (opts.skipAuthentication ? resolve(opts.options) : reject(error)))
        .catch(err => err.name === 'ApiError', () => reject(new Error('You must supply a valid encryption key')))
        .then(merge(payload))
        .then(requestOpts => ({
        authentication: { encryption_key: encryptionKey },
        options: requestOpts,
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
//# sourceMappingURL=encryption.js.map