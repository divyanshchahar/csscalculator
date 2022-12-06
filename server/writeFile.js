const fs = require("fs");

/**
 * Function to write strings to file
 * @param {string} arg - string to write in file
 */

function writeFile(arg) {
  fs.writeFile("../output/resolved_variables.txt", arg, () => {});
}

module.exports = writeFile;
