import HasColon from "./HasColon";
import HasSemiColon from "./HasSemiColon";
import SplitByColon from "./SplitByColon";
import ValidVar from "./ValidVar";
import UniqueVar from "./UniqueVar";
import CheckUnits from "./CheckUnits";

import { v4 as uuidv4 } from "uuid";

/**
 * Function to generate new absolute variables from user input for new varaible
 * @param {string} inputString - input from the user
 * @param {array} stateVar - array of state variable
 * @param {function} stateFunc - function to modify statevaraible
 */

function GenerateAbsoluteFromInput(inputString, stateVar, stateFunc) {
  const check1 = HasColon(inputString);
  if (check1 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check1,
        userInput: inputString,
      },
    ]);
    return;
  }

  const check2 = HasSemiColon(inputString);
  if (check2 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check2,
        userInput: inputString,
      },
    ]);
    return;
  }

  const [varName, varValue] = SplitByColon(inputString);

  const check3 = ValidVar(varName);
  if (check3 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check3,
        userInput: inputString,
      },
    ]);
    return;
  }

  const check4 = UniqueVar(varName, stateVar);
  if (check4 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check4,
        userInput: inputString,
      },
    ]);
    return;
  }

  const check5 = CheckUnits(varValue);
  if (check5 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check5,
        userInput: inputString,
      },
    ]);
    return;
  }

  stateFunc([
    ...stateVar,
    {
      id: uuidv4(),
      varName: varName,
      varValue: varValue,
      hasError: false,
      errorMessage: null,
      userInput: inputString,
    },
  ]);
}

export default GenerateAbsoluteFromInput;
