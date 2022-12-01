/**
 * Function to generate good object
 * @param {string} itemID - id of the object which needs to be updated
 * @param {string} inputString - input string fom the user
 * @param {string} varName - name of the variable
 * @param {string} varValue - value of the variable
 * @param {array} stateVar - array of stateVariables
 * @returns {array} - updated array
 */

function GenerateGoodObject(itemID, inputString, varName, varValue, stateVar) {
  const newArr = stateVar.map((item) => {
    if (item.id === itemID) {
      return {
        ...item,
        varName: varName,
        varValue: varValue,
        hasError: false,
        errorMessage: null,
        userInput: inputString,
      };
    }
    return item;
  });
  return newArr;
}

export default GenerateGoodObject;
