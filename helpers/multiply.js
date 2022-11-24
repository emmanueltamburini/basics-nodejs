const fs = require('fs');
const colors = require('colors');

const buildField = async (base, list, until) => {
    let consoleOutput = '';
    let output = '';

    for (let index = 1; index <= until; index++) {
        output += `${base} x ${index} = ${index*base}\n`;
        consoleOutput += `${base.toString().grey} ${'x'.white} ${index.toString().grey} ${'='.white} ${(index*base).toString().grey}\n`;
    }

    if (list) {
        console.clear();
        console.log('====================================='.blue);
        console.log(`     Multiplication table of ${base.toString().red}`.blue);
        console.log('====================================='.blue);
        console.log(output);
    }

    fs.writeFileSync(`./output/table-${base}.txt`, output);

    return `table-${base}.txt`;
}

module.exports = {
    buildField
};