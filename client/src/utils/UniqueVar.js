/**
 * Function to check if the variable name is unique
 * @param {string} varName - name of the varaible
 * @param {array} stateVars - array of state varaibles
 * @returns {boolean} - `true` if the variable name is unique or `false` if the variable name is not unique
 */
function UniqueVar(varName, stateVars) {
  let isUnique = true;
  try {
    stateVars.map((item) => {
      if (item.varName == varName) {
        isUnique = "variable name should be unique";
      }
    });
  } catch (err) {
    return isUnique;
  }
  return isUnique;
}

export default UniqueVar;
