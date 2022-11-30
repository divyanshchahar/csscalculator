import HasColon from "./HasColon";
import HasSemiColon from "./HasSemiColon";
import SplitByColon from "./SplitByColon";
import ValidVar from "./ValidVar";
import UniqueVar from "./UniqueVar";
import HasOperator from "./HasOperator";
import ExtractVar from "./ExtractVar";
import VarExists from "./VarExists";
import GetVarValue from "./GetVarValue";
import SplitVarValue from "./SplitVarValue";
import ExtractOperands from "./ExtractOperand";
import ExtractOperator from "./ExtractOperator";
import PerformCalculation from "./PerformCalculation";
import GenerateValueString from "./GenerateValueString";

import { v4 as uuidv4 } from "uuid";

/**
 * Function to add calculated variables
 * @param {string} inputString - string of user input
 * @param {array} stateVar - array of stateVariables
 * @param {function} stateFunc - function to modify state variable
 */

function GenerateCalcVarFromInput(inputString, stateVar, stateFunc) {
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

  const [varName, string2] = SplitByColon(inputString);

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

  const check5 = HasOperator(string2);
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

  const refrenceVar = ExtractVar(string2);

  const check6 = VarExists(refrenceVar, stateVar);
  if (check6 === true) {
  } else {
    stateFunc([
      ...stateVar,
      {
        id: uuidv4(),
        varName: null,
        varValue: null,
        hasError: true,
        errorMessage: check6,
        userInput: inputString,
      },
    ]);
    return;
  }

  const varValue = GetVarValue(refrenceVar, stateVar);

  const [varQuant, varUnit] = SplitVarValue(varValue);

  const operands = ExtractOperands(varQuant, string2);

  const operator = ExtractOperator(string2);

  const resolvedValue = PerformCalculation(operands, operator);

  const valueString = GenerateValueString(resolvedValue, varUnit);

  stateFunc([
    ...stateVar,
    {
      id: uuidv4(),
      varName: varName,
      varValue: valueString,
      hasError: false,
      errorMessage: null,
      userInput: inputString,
    },
  ]);
}

export default GenerateCalcVarFromInput;
