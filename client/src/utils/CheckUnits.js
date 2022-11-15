function CheckUnits(arg) {
  const pattern1 =
    /\d*(vh|vw|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vamx|%)/;
  const pattern2 = /0/;

  if (pattern1.test(arg) || pattern2.test(arg)) {
    return true;
  } else {
    return false;
  }
}

export default CheckUnits;
