import UpdateAbsoluteVar from "./UpdateAbsoluteVar";
import UpdateCalcVar from "./UpdateCalcVar";
import UpdateRest from "./UpdateRest";

/**
 * Function to change the `userInput` of the state object
 * @param {string} inputString - string from text input
 * @param {string} itemID - `id` of the object whose `userInput` needs to be changed
 * @param {array} stateVar - array of state varible
 * @param {function} stateFunc - function to hange state varaibles
 */

function HandleUpdate(inputString, itemID, stateVar, stateFunc) {
  const pattern = /calc/g;
  if (pattern.test(inputString)) {
    const newArr = UpdateCalcVar(itemID, inputString, stateVar, stateFunc);
    const updatedArr = UpdateRest(newArr);
    stateFunc(updatedArr);
  } else {
    const newArr = UpdateAbsoluteVar(itemID, inputString, stateVar, stateFunc);
    const updatedArr = UpdateRest(newArr);
    stateFunc(updatedArr);
  }
}

export default HandleUpdate;
