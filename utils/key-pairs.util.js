const { generateKeyPairSync } = require('crypto');
const { writeFileSync } = require('fs');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

writeFileSync('public.pem', Buffer.from(publicKey));
writeFileSync('private.pem', Buffer.from(privateKey));

module.exports = { privateKey, publicKey };
