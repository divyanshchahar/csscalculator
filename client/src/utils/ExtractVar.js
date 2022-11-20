/**
 * Extracts variable name from "calc(_calculation_)"
 * @param {string} arg - string containing calc(_calculation_) string
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
