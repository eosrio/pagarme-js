/**
 * @name login
 * @memberof strategies
 * @private
 */
import { merge, mergeRight } from 'ramda'

import session from '../../resources/session'

const buildSessionAuth = ({
  session_id: sessionId,
  impersonation_key: impersonationKey,
}, options) => mergeRight(options, {
  body: {
    session_id: sessionId,
    impersonation_key: impersonationKey,
  },
})

/**
 * Creates a session in the server
 * and returns a Promise with the
 * pertinent object.
 * Allows setting the environment
 * to live passing `environment: "live"`.
 *
 * @param {any} { email, password, recaptchaToken, environment }
 * @returns {Promise} Resolves to an object
 *                    containing a body with
 *                    the desired `session_id`
 * @private
 */
function execute ({
  email,
  password,
  recaptchaToken,
  token,
  impersonationKey,
  environment,
  options,
}) {
  const headers = environment === 'live'
    ? { 'X-Live': 1 }
    : {}

  const opts = mergeRight(options, {
    headers,
  })

  return session.create(opts, email, password, recaptchaToken, token)
    .then(sessionInfo => ({
      options: buildSessionAuth(merge(sessionInfo, {
        impersonation_key: impersonationKey,
      }), opts),
      authentication: sessionInfo,
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

export default { build }
