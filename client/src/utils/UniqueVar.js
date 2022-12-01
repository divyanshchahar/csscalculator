/**
 * Checks if the variable name is unique
 * @param {*} varName
 * @param {*} stateVars
 * @returns {boolean} - `true` if the variable name is unique or `false` if the variable name is not unique
 */
function UniqueVar(varName, stateVars) {
  let isUnique = true;
  stateVars.map((item) => {
    if (item.varName == varName) {
      isUnique = "variable name should be unique";
    }
  });
  return isUnique;
}

export default UniqueVar;
