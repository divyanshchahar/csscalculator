const fs = require("fs");

/**
 * Function to generate string to be written in file
 * @param {array} arg - array of objects
 * @returns {string} - content to be written in file
 */
function generateString(arg) {
  let generatedString = "";

  arg.map((item) => {
    if (!item.hasError) {
      generatedString = `${generatedString} ${item.varName}:${item.varValue}; \n`;
    }
  });

  return generatedString;
}

module.exports = generateString;
