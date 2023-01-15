const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const key = randomBytes(32);

const encrypt = (fileText) => {
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(key), iv);

  const encryptedMessage = Buffer.concat([
    cipher.update(fileText, 'utf8'),
    cipher.final(),
  ]).toString('hex');

  return { encryptedMessage, iv: iv.toString('hex') };
};

const decrypt = (encryption) => {
  const ivBuffered = Buffer.from(encryption.iv, 'hex');
  const encryptedMessage = Buffer.from(encryption.encryptedMessage, 'hex');
  const decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(key),
    ivBuffered
  );

  const decryptedMessage = Buffer.concat([
    decipher.update(encryptedMessage),
    decipher.final(),
  ]);

  return decryptedMessage.toString();
};

module.exports = { encrypt, decrypt };
