/**
 * Function to generate error object
 * @param {string} itemID - id of the object which needs to be updated
 * @param {string} inputString - input string fom the user
 * @param {string} errorMessage - error message generated
 * @param {array} stateVar - array of stateVariables
 * @returns {array} = updated array
 */

function GenerateErrorObject(itemID, inputString, errorMessage, stateVar) {
  const newArr = stateVar.map((item) => {
    if (item.id === itemID) {
      return {
        ...item,
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: errorMessage,
        userInput: inputString,
      };
    }
    return item;
  });
  return newArr;
}

export default GenerateErrorObject;
