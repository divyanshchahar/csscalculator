/**
 * splits string cooming form calculated variable
 * @param {string} arg - string in the form _--varname: calc(__calculation__);_
 * @returns {array} - array contaning variable name and calculation string in the for _calc(__calculation__)_
 */

function SplitCalcVarString(arg) {
  let [varName, calcString] = arg.split(":");
  varName = varName.trim();
  calcString = calcString.trim();
  calcString = calcString.replace(";", "");

  return [varName, calcString];
}

export default SplitCalcVarString;
