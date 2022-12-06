/**
 *Function to check if the variable name exists in the list of variable
 * @param {string} varName - name of the variable
 * @param {array} stateVars - array of state variables
 * @returns {boolean} - `true` if the variable name is unique or error message if the variable name is not unique
 */

function VarExists(varName, stateVars) {
  let varPresent = "refrence varaible does not exists";
  stateVars.map((item) => {
    if (item.varName === varName) {
      varPresent = true;
    }
  });
  return varPresent;
}

export default VarExists;
