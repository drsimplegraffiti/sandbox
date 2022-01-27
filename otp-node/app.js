const otpGenerator = require('otp-generator')

const result = otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: true });
console.log(result);