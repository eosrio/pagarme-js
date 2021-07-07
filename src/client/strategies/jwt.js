/**
 * @name sessionId
 * @memberof strategies
 * @private
 */
import { reject, resolve } from 'bluebird'
import { mergeRight } from 'ramda'
import transactions from '../../resources/transactions'

/**
 * Creates an object with
 * the `account_id` and `jwt`from
 * the supplied `options` param
 *
 * @param accountId
 * @param environment
 * @param impersonationKey
 * @param jwt
 * @param accountId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param jwt
 * @param accountId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param jwt
 * @param accountId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param jwt
 * @param accountId
 * @param skipAuthentication
 * @param environment
 * @param impersonationKey
 * @param jwt
 * @param {any} options
 * @param skipAuthentication
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `jwt`
 * @private
 */
function execute ({
  account_id: accountId,
  environment,
  impersonationKey,
  jwt,
  options,
  skipAuthentication,
}) {
  const headers = environment === 'live' ? { 'X-Live': 1 } : {}
  const body = { account_id: accountId, jwt }

  if (impersonationKey) {
    body.impersonation_key = impersonationKey
  }

  const opts = mergeRight(options, { body, headers})

  return transactions.calculateInstallmentsAmount(
    opts, { amount: 1, interest_rate: 100 },
  )
    .catch(error => (skipAuthentication ? resolve(opts) : reject(error)))
    .catch({ name: 'ApiError' },
      () => reject(new Error('You must supply a valid jwt token and a valid account_id')))
    .then(() => ({
      authentication: { account_id: accountId, jwt },
      options: opts,
    }))
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
function build (options) {
  return mergeRight(options, { execute: execute.bind(null, options) })
}

export default {
  build,
}
