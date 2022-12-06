/**
 * Function to generates a value string by combining variable unit and calculated quantity
 * @param {string} calculatedValue - calculated value of the variable
 * @param {string} varUnit - unit of calculation
 * @returns {string} a string formed by combining calculated value and unit of refrence value
 */
function GenerateValueString(calculatedValue, varUnit) {
  return `${calculatedValue}${varUnit}`;
}

export default GenerateValueString;
