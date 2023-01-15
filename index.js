// const { publicEncrypt, privateDecrypt } = require('crypto');
// const { encrypt, decrypt } = require('./utils/encrypt-decrypt.util');
// const { privateKey, publicKey } = require('./utils/key-pairs.util');
//
// const logProcess = (text) => {
//   const output = encrypt(text);
//   console.log(output);
//   console.log(decrypt(output));
// };
//
// logProcess('Hello World');
// logProcess('Omar Elsayed');
// logProcess('More than one');
//
// console.log({ privateKey, publicKey });
//
// const logEncryption = (text) => {
//   const encryptedData = publicEncrypt(publicKey, Buffer.from(text));
//   console.log({ encryptedData: encryptedData.toString('hex') });
//
//   console.log({ encryptedData });
//   const decryptedData = privateDecrypt(privateKey, encryptedData);
//   console.log({ decryptedData: decryptedData.toString('utf-8') });
// };
//
// logEncryption('Hot as fuck');

const { createSign, createVerify } = require('crypto');
const { privateKey, publicKey } = require('./utils/key-pairs.util');

const activationData = {
  id: 'c57ffc25-a118-4f55-a804-e8cef368c6b5',
  createdAt: '2022-12-20T10:49:22.764Z',
  updatedAt: '2022-12-20T10:49:22.764Z',
  deletedAt: null,
  version: 1,
  projectVersion: null,
  key: 'AM34-4B19-QELE-YBV5-JF4D',
  metadata: { 'max-local-servers': 2 },
  activatedAt: '2022-12-20T10:49:22.726Z',
  expiredAt: '2023-09-30T01:04:34.000Z',
  allowedDomains: [],
  allowedDevices: [],
  features: [],
  client: {
    id: '3b5e2569-003f-4240-9d35-525280ffaa34',
    createdAt: '2022-12-20T10:48:43.831Z',
    updatedAt: '2022-12-20T10:48:43.831Z',
    deletedAt: null,
    version: 1,
    name: 'Syscodeia',
    email: 'admin@syscodeia.ae',
    phone: '+201020304050',
  },
  project: {
    id: 'a50b48b3-ceb5-4b73-9a87-5ed5076489d4',
    createdAt: '2022-12-20T10:46:56.122Z',
    updatedAt: '2022-12-20T10:46:56.122Z',
    deletedAt: null,
    version: 1,
    slug: 'score-sheet',
    name: 'Score Sheet',
  },
};

const licensesString = JSON.stringify(activationData).toString();

console.log({ licensesString });

const message2 = btoa(licensesString);

console.log({ message2 });

const message = Buffer.from(licensesString).toString('base64');

console.log({ message });


signer.update(message);

const signature = signer.sign(privateKey, 'hex');

console.log(signature);

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature + '2', 'hex');

console.log({ isVerified });
