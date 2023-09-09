const CryptoJS = require('crypto-js');
var urlencode = require('urlencode');

const SECRET_KEY = `${process.env.CRYPTO_SECRET}`;

function encrypt(text) {
  const ciphertext = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
  return urlencode(ciphertext);
}

function decrypt(ciphertext) {
  ciphertext=urlencode.decode(ciphertext)
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}

module.exports={encrypt, decrypt}
