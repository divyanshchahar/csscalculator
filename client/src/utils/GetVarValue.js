/**
 * Function to get variable value
 * @param {string} refreneVar - variable name
 * @param {array} stateVar - array containing state variables
 * @returns - value of the variable
 */

function GetVarValue(refreneVar, stateVar) {
  const [filteredItem] = stateVar.filter((item) => {
    return item.varName === refreneVar;
  });
  return filteredItem.varValue;
}

export default GetVarValue;
