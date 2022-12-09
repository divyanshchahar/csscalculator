import UpdateAbsoluteVar from "./UpdateAbsoluteVar";
import UpdateCalcVar from "./UpdateCalcVar";

/**
 * Function to automatically update the dependent variable when the root variable changes
 * @param {array} newArr - array with updated value of the only the dependent variable
 * @returns {array} - final updated array
 */

function UpdateRest(newArr) {
  const pattern = /calc/g;
  let updatedArr = newArr;
  newArr.map((item) => {
    const { id: itemID, userInput: inputString } = item;
    if (pattern.test(inputString)) {
      updatedArr = UpdateCalcVar(itemID, inputString, updatedArr);
    } else {
      updatedArr = UpdateAbsoluteVar(itemID, inputString, updatedArr);
    }
  });

  return updatedArr;
}

export default UpdateRest;
