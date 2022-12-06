import HasColon from "./HasColon";
import HasSemiColon from "./HasSemiColon";
import SplitByColon from "./SplitByColon";
import ValidVar from "./ValidVar";
import CheckUnits from "./CheckUnits";
import GenerateErrorObject from "./GenerateErrorObject";
import GenerateGoodObject from "./GenerateGoodObject";

/**
 * Function to update absolute variables
 * @param {string} itemID - `id` of the state object
 * @param {string} inputString - input from the user
 * @param {array} stateVar - array of state variable
 * @param {function} stateFunc - function to midify state variable
 */
function UpdateAbsoluteFromInput(itemID, inputString, stateVar, stateFunc) {
  const check1 = HasColon(inputString);
  if (check1 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check1, stateVar));
    return;
  }

  const check2 = HasSemiColon(inputString);
  if (check2 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check2, stateVar));
    return;
  }

  const [varName, varValue] = SplitByColon(inputString);

  const check3 = ValidVar(varName);
  if (check3 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check3, stateVar));
    return;
  }

  const check4 = CheckUnits(varValue);
  if (check4 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check4, stateVar));
    return;
  }

  stateFunc(
    GenerateGoodObject(itemID, inputString, varName, varValue, stateVar)
  );
}

export default UpdateAbsoluteFromInput;
