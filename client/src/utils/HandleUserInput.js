// import { v4 as uuidv4 } from "uuid";
import GenerateCalcVarFromInput from "./GenerateCalcVarFromInput";
import GenerateAbsoluteFromInput from "./GenerateAbsoluteFromInput";

/**
 * Function to add to the list of variables
 * @param {string} inputstring - input from the user
 * @param {array} stateVar - array of state variable
 * @param {function} stateFunc - function to change state varaible
 */
function HandleUserInput(inputstring, stateVar, stateFunc) {
  const pattern = /calc/g;
  if (pattern.test(inputstring)) {
    GenerateCalcVarFromInput(inputstring, stateVar, stateFunc);
  } else {
    GenerateAbsoluteFromInput(inputstring, stateVar, stateFunc);
  }
}

export default HandleUserInput;
