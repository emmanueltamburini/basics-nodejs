const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Multiply base of the table that you want'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        description: 'Show table in console'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 10,
        description: 'Especific how many values you want in the multiply table'
    })
    .check(argv => {
        if(isNaN(argv.base)) {
            throw new Error('Base has to be a number');
        }

        return true;
    })
    .argv;

module.exports = argv;