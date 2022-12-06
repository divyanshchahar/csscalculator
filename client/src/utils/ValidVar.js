/**
 * Function to check if the variable name is valid
 * @param {string} arg - name of the variable from the input string
 * @returns - `true` if the variable name is valid othersiwse returns error message
 */
function ValidVar(arg) {
  const pattern = /--.*/g;
  if (pattern.test(arg)) {
    return true;
  } else {
    return "invalid variable name";
  }
}

export default ValidVar;
