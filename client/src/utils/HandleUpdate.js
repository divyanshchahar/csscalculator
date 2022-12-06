import UpdateAbsoluteFromInput from "./UpdateAbsoluteFromInput";
import UpdateCalcFromInput from "./UpdateCalcFromInput";

/**
 * Function to change the `userInput` of the state object
 * @param {string} inputString - string from text input
 * @param {string} itemID - `id` of the object whose `userInput` needs to be changed
 * @param {array} stateVar - array of state varible
 * @param {function} satateFunc - function to hange state varaibles
 */

function HandleUpdate(inputString, itemID, stateVar, satateFunc) {
  const pattern = /calc/g;
  if (pattern.test(inputString)) {
    UpdateCalcFromInput(itemID, inputString, stateVar, satateFunc);
  } else {
    UpdateAbsoluteFromInput(itemID, inputString, stateVar, satateFunc);
  }
}

export default HandleUpdate;
