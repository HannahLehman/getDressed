const program = require('commander');
const { getDressed } = require('./commands');

program
  .version('0.0.1')
  .description('Command line Hex-To-Base Utility');

program
  .command("dress <itemsArray>")
  .alias('d')
  .description('see the base64 conversion of the supplied hexadecimal string')
  .action(itemsArray => getDressed(itemsArray));

program.parse(process.argv);
