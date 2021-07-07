/**
 * @name Security
 * @description This module exposes functions
 *              related to security procedures.
 *
 * @module security
 **/
import qs from 'qs'
import {
  toString,
  replace,
  pipe,
} from 'ramda'
import { verifySignature, calculateSignature } from '../postback'

import transactions from './transactions'

let subtleCrypto = window.crypto.subtle
// if (typeof window !== 'undefined' && window.crypto) {
//   subtleCrypto = window.crypto.subtle
// } else {
//   subtleCrypto = import('crypto').webcrypto.subtle
// }

const universalBtoa = str => {
  try {
    return window.btoa(str)
  } catch (err) {
    return Buffer.from(str)
      .toString('base64')
  }
}

const cleanNumber = pipe(
  toString,
  replace(/[^0-9]/g, ''),
)

const queryString = card =>
  qs.stringify({
    card_number: cleanNumber(card.card_number),
    card_holder_name: card.card_holder_name,
    card_expiration_date: cleanNumber(card.card_expiration_date),
    card_cvv: cleanNumber(card.card_cvv),
  })

async function generateCardHash ({ id }, cardString) {
  const { publicKey } = await subtleCrypto.generateKey({
    hash: 'SHA-256',
    name: 'RSA-OAEP',
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    length: 256,
  }, true, ['encrypt', 'decrypt'])

  const encrypted = await subtleCrypto.encrypt({
    name: 'RSA-OAEP',
  }, publicKey, cardString)
  const encoded = universalBtoa(encrypted)
  return `${id}_${encoded}`
}

/**
 * Encrypt a card object into a card_hash
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} card The card object.
 * {@link https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente|API Reference for this payload}
 *
 * @param {String} card.card_number The card's number.
 *                             Example: '4111111111111111'
 * @param {String} card.card_holder_name The card's holder name.
 *                             Example: 'Pedro Paulo'
 * @param {String} card.card_expiration_date The card's expiration date.
 *                             Example: '1225' or '12/25'
 * @param {String} card.card_cvv The card's cvv.
 *                             Example: '543'
 */
const encrypt = async (opts, card) => {
  const key = card.key ? card.key : await transactions.cardHashKey(opts)
  const cardString = queryString(card)
  return await generateCardHash(key, cardString)
}

/**
 * Generates a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.calculatesignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
 */
const sign = (opts, string) =>
  calculateSignature(opts.body.api_key, string)

/**
 * Verifies a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.validateSignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
 * @param {String} expected The expected result.
 *
 */
const verify = (opts, string, expected) =>
  verifySignature(opts.body.api_key, string, expected)

export default {
  encrypt,
  sign,
  verify,
}
