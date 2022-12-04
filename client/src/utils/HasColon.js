/**
 * Checks for presence of a single colon (__:__) in the string
 * @param {string} arg - input string from the user
 * @returns `true` if the string has colon (__:__) otherwise returns error message
 */
function HasColon(arg) {
  const pattern = /;/g;
  if (pattern.test(arg)) {
    return true;
  } else {
    return "input should contain exactly one ;";
  }
}

export default HasColon;
