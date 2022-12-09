import HasColon from "./HasColon";
import HasSemiColon from "./HasSemiColon";
import SplitByColon from "./SplitByColon";
import ValidVar from "./ValidVar";
import CheckUnits from "./CheckUnits";
import GenerateErrorObject from "./GenerateErrorObject";
import GenerateGoodObject from "./GenerateGoodObject";

/**
 * Function to update a single absolute variable
 * @param {string} itemID - `id` of the state object
 * @param {string} inputString - input from the user
 * @param {array} stateVar - array of state variable
 */
function UpdateAbsoluteVar(itemID, inputString, stateVar) {
  const check1 = HasColon(inputString);
  if (check1 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check1, stateVar);
  }

  const check2 = HasSemiColon(inputString);
  if (check2 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check2, stateVar);
  }

  const [varName, varValue] = SplitByColon(inputString);

  const check3 = ValidVar(varName);
  if (check3 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check3, stateVar);
  }

  const check4 = CheckUnits(varValue);
  if (check4 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check4, stateVar);
  }

  return GenerateGoodObject(itemID, inputString, varName, varValue, stateVar);
}

export default UpdateAbsoluteVar;
