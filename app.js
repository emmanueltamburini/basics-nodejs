const argv = require('./config/yargs');
const { buildField } = require('./helpers/multiply');
const colors = require('colors');

const { base, list, until } = argv;

buildField(base, list, until)
    .then(fieldName => console.log(`${fieldName} has been created`.green))
    .catch(error => console.log(error));