const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function rename(folder, search, replacement) {
  const reg = typeof search === "string" ? new RegExp(search) : search;
  const dir = fs.readdirSync(folder, { withFileTypes: true });
  dir.forEach(p => {
    const fileName = p.name;
    const filePath = path.join(folder, fileName);
    if (p.isDirectory()) {
      rename(filePath, search, replacement);
    } else if (reg.test(fileName) && /\./.test(fileName)) {
      const newFileName = fileName.replace(reg, replacement);
      const newPath = path.join(folder, newFileName);
      // TODO: ENSURE NOTHING IS OVERWRITTEN
      if (dir.filter(f => f.name == newFileName).length == 0) {
        fs.renameSync(filePath, newPath);
        console.log(`${chalk.white('renamed:')} ${chalk.green.bold(filePath)} ${chalk.white('to')} ${chalk.green.bold(newPath)}`);
      } else {
        console.log(`${chalk.red.bold(newPath)} ${chalk.red(`exists. Skipping.`)}`);
      }
    }
  });
}

module.exports = rename;
