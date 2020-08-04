#!/usr/bin/env node

const rename = require("./regexp-rename.js");
const chalk = require("chalk");

const run = ({ directory, search, replace }) => {
  rename(directory, search, replace);
}

const parse = (argv) => {
  if (argv.length !== 3) {
    console.log(`${chalk.white('Usage: dirmv')} ${chalk.yellow('<directory> <search> <replace>')}`);
    process.exit(500);
  } else {
    return {
      directory: argv[0],
      search: argv[1],
      replace: argv[2],
    }
  }
}

let opts = parse(process.argv.slice(2));
run(opts);
