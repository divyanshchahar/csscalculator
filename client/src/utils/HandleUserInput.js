// import { v4 as uuidv4 } from "uuid";
import GenerateCalcVarFromInput from "./GenerateCalcVarFromInput";
import GenerateAbsoluteFromInput from "./GenerateAbsoluteFromInput";

/**
 * Function to add to the list of variables
 * @param {eventObject} e - event object passed from text input
 * @param {state variable} stateVar - state variable
 * @param {state Function} stateFunc - state function which will be used to change the state function
 */
function HandleUserInput(inputstring, stateVar, stateFunc) {
  const pattern = /calc/g;
  if (pattern.test(inputstring)) {
    GenerateCalcVarFromInput(inputstring, stateVar, stateFunc);
  } else {
    GenerateAbsoluteFromInput(inputstring, stateVar, stateFunc);
  }

  // stateFunc([...stateVar, { id: uuidv4(), userInput: inputstring }]);
}

export default HandleUserInput;
