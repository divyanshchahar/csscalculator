/**
 *
 * @param {array} arg - array of calaulated value and unit of the refrenced value
 * @returns {string} - a string formed by combining calculated value and unit of refrence value
 */
function GenerateValueString(arg) {
  const [calculatedValue, varUnit] = arg;

  return `${calculatedValue}${varUnit}`;
}

export default GenerateValueString;
