const fs = require('fs');

const buildField = async (base) => {
    console.log('=====================================');
    console.log(`     Multiplication table of ${base}`);
    console.log('=====================================');

    let output = '';

    for (let index = 1; index < 11; index++) {
        output += `${base} x ${index} = ${index*base}\n`;
    }

    console.log(output);

    fs.writeFileSync(`table-${base}.txt`, output);

    return `table-${base}.txt`;
}

module.exports = {
    buildField
};