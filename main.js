"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const package_json_1 = require("./package.json");
const program = new commander_1.default.Command();
program.name(package_json_1.name);
program.version(package_json_1.version);
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
