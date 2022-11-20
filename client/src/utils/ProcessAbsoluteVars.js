/**
 * splits string varible name an variable value
 * @param {string} arg string in form __--varname: varvalue__
 * @returns {array} array containing varaible name and varaible value
 */

function ProcessAbsoluteVars(arg) {
  let [varName, temp] = arg.split(":");

  temp = temp.trim();
  const varValue = temp.replace(";", "");

  return [varName, varValue];
}

export default ProcessAbsoluteVars;
