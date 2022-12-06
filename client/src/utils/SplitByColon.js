/**
 * Function to split the string using colon (__:__) and remove semi-colon(__;__)
 * @param {string} arg - input string form the user
 * @returns {array} - array of two strings
 */

function SplitByColon(arg) {
  let [varName, string2] = arg.split(":");
  varName = varName.trim();
  string2 = string2.trim();
  string2 = string2.replace(";", "");

  return [varName, string2];
}

export default SplitByColon;
