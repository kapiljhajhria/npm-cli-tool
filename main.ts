import commander from 'commander';
import { name, version } from './package.json';

const program = new commander.Command();

program.name(name);
program.version(version);
program
  .command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s', 'separator character', ',')
  .action((str, options) => {
    console.log(`options usedq: ${JSON.stringify(options)}`);
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.sep));
  });
program.parse();
