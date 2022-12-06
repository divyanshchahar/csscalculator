/**
 * Function to check for valid css units, returns `true` if unit is valid, otherwise it return error message
 * @param {string} arg string containing variable quantity and unit
 * @returns - `true` if the unit is valid or error message __invalid string__ if unit is not valid
 */

function CheckUnits(arg) {
  const pattern1 = /\d*(vh|vw|cm|mm|in|px|pt|pc|em|ex|ch|rem|vmin|vmax|%)/g;
  const pattern2 = "0";
  try {
    if (arg.match(pattern1).length === 1 || arg === pattern2) {
      return true;
    } else {
      return "invalid unit";
    }
  } catch (error) {
    return "invalid unit";
  }
}

export default CheckUnits;
