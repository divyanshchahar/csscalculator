/**
 * Function to extracts variable name from __calc(_calculation_)__ string
 * @param {string} arg - string of type __calc(_calculation_)__
 * @returns {string} string contaning the extracted variable name
 */

function ExtractVar(arg) {
  let [varName] = arg.match(/var\(.*?\)/g);

  varName = varName.replace("var(", "");
  varName = varName.replace(")", "");
  varName = varName.trim();

  return varName;
}

export default ExtractVar;
