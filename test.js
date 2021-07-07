const hmacSHA1 = require('crypto-js/hmac-sha1')
const Hex = require('crypto-js/enc-hex')
const Base64 = require('crypto-js/enc-base64')
const CryptoJS = require('crypto-js')
const Promise = require('bluebird')
const NodeRSA = require('node-rsa')
const qs = require('qs')
const { pipe, toString, replace } = require('ramda')

let subtleCrypto
if (typeof window !== 'undefined' && window.crypto) {
  subtleCrypto = window.crypto.subtle
} else {
  subtleCrypto = require('crypto').webcrypto.subtle
}

const universalBtoa = str => {
  try {
    return window.btoa(str);
  } catch (err) {
    return Buffer.from(str).toString('base64');
  }
};

function calculateSignature (key, postbackBody) {
  return hmacSHA1(postbackBody, key)
    .toString(Hex)
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

const generateCardHash = ({ public_key: publicKey, id }, cardString) => {
  const key = new NodeRSA(publicKey, {
    encryptionScheme: 'pkcs1',
  })
  const encrypted = key.encrypt(cardString, 'base64')
  return `${id}_${encrypted}`
}

const encrypt = (opts, card) =>
  Promise.props({
    key: card.key,
    cardString: queryString(card),
  })
    .then(({ key, cardString }) => generateCardHash(key, cardString))

const key = new NodeRSA({ b: 2048 }, { encryptionScheme: 'pkcs1' })
const publicKey = key.exportKey('pkcs1-public-pem')

const opts = {
  body: {
    api_key: '123',
  },
}
const card = {
  card_number: '4111111111111111',
  card_holder_name: 'abc',
  card_expiration_date: '1225',
  card_cvv: '123',
  // you can pass a key generated from
  // 'client.transactions.cardHashKey'
  // but this is not needed. We did it
  // here because we don't want this to
  // be an e2e test.
  key: {
    date_created: '2017-03-15T18:12:07.937Z',
    id: 446698,
    ip: '177.32.85.54',
    public_key: publicKey,
  },
}

// const generateCardHash = ({ public_key: publicKey, id }, cardString) => {
//   const key = new NodeRSA(publicKey, {
//     encryptionScheme: 'pkcs1',
//   })
//   const encrypted = key.encrypt(cardString, 'base64')
//   return `${id}_${encrypted}`
// }

async function generateCardHash2 ({ id }, cardString) {
  const {
    publicKey,
    privateKey,
  } = await subtleCrypto.generateKey({
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

async function encrypt2 (opts, card) {
  const key = card.key
  const cardString = queryString(card)
  return generateCardHash2(key, cardString)
}

encrypt(opts, card)
  .then((hash) => {
    const cardHash = hash.split('_')[1]
    console.log(cardHash)
    // 'card_number=4111111111111111&card_holder_name=abc&card_expiration_date=1225&card_cvv=123'
  })

encrypt2(opts, card)
  .then((hash) => {
    const cardHash = hash.split('_')[1]
    console.log(cardHash)
    // const cardQueryString = key.decrypt(cardHash, 'utf8')
    // console.log(cardQueryString)
    // 'card_number=4111111111111111&card_holder_name=abc&card_expiration_date=1225&card_cvv=123'
  })
