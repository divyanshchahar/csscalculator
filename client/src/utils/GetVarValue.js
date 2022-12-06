/**
 * Function to get variable value from list of varaibles
 * @param {string} refreneVar - variable name
 * @param {array} stateVar - array containing state variables
 * @returns {string} value of the variable
 */

function GetVarValue(refreneVar, stateVar) {
  const [filteredItem] = stateVar.filter((item) => {
    return item.varName === refreneVar;
  });
  return filteredItem.varValue;
}

export default GetVarValue;
