const { buildField } = require('./helpers/multiply');
const argv = require('yargs').argv;
console.clear();

const [,, baseArg = '--base=5'] = process.argv
const [, base = 5] = baseArg.split('=');

console.log(base);

buildField(base)
    .then(fieldName => console.log(`${fieldName} has been created`))
    .catch(error => console.log(error));