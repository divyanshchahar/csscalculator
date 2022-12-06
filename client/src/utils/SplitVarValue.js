/**
 * Function to split the value of a variable into quanitity and unit
 * @param {string} arg - string of variable value and unit
 * @returns {array} - array containing variable quantity and variable value
 */

function SplitVarValue(arg) {
  let [varQuantity] = arg.match(/\d*/g);
  let [varUnit] = arg.match(/\D+/g);

  // in regular expression of varUnit "+" is used, instead of "*" as "*" was returning an empty string

  return [varQuantity, varUnit];
}

export default SplitVarValue;
