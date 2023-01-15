const { createSign, createVerify } = require('crypto');

const message = 'Here we go?!';

const signer = createSign('res-sha256');

signer.update(message);

console.log(signer);
