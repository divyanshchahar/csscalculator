/**
 * checks for valid css units, returns true if unit is valid, otherwise it return false
 * @param {string} arg string containing variable quantity and unit
 * @returns
 */

function CheckUnits(arg) {
  const pattern1 =
    /\d*(vh|vw|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vamx|%)/;
  const pattern2 = /0/;

  if (pattern1.test(arg) || pattern2.test(arg)) {
    return true;
  } else {
    return "invalid unit";
  }
}

export default CheckUnits;
