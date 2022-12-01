import HasColon from "./HasColon";
import HasSemiColon from "./HasSemiColon";
import SplitByColon from "./SplitByColon";
import ValidVar from "./ValidVar";
import HasOperator from "./HasOperator";
import ExtractVar from "./ExtractVar";
import VarExists from "./VarExists";
import GetVarValue from "./GetVarValue";
import SplitVarValue from "./SplitVarValue";
import ExtractOperand from "./ExtractOperand";
import ExtractOperator from "./ExtractOperator";
import PerformCalculation from "./PerformCalculation";
import GenerateValueString from "./GenerateValueString";
import GenerateErrorObject from "./GenerateErrorObject";
import GenerateGoodObject from "./GenerateGoodObject";

/**
 *
 * @param {string} itemID - id of the object which neeeds to be updated
 * @param {string} inputString - user input
 * @param {array} stateVar - array of state variables
 * @param {function} stateFunc - function to modify state variable
 * @returns
 */

function UpdateCalcVarFromInput(itemID, inputString, stateVar, stateFunc) {
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

  const [varName, string2] = SplitByColon(inputString);

  const check3 = ValidVar(varName);
  if (check3 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check3, stateVar));
    return;
  }

  const check4 = HasOperator(string2);
  if (check4 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check4, stateVar));
    return;
  }

  const refrenceVar = ExtractVar(string2);

  const check5 = VarExists(refrenceVar, stateVar);
  if (check5 === true) {
  } else {
    stateFunc(GenerateErrorObject(itemID, inputString, check5, stateVar));
    return;
  }

  const varValue = GetVarValue(refrenceVar, stateVar);

  const [varQuant, varUnit] = SplitVarValue(varValue);

  const operands = ExtractOperand(varQuant, string2);

  const operator = ExtractOperator(string2);

  const resolvedValue = PerformCalculation(operands, operator);

  const valueString = GenerateValueString(resolvedValue, varUnit);

  stateFunc(
    GenerateGoodObject(itemID, inputString, varName, valueString, stateVar)
  );
}

export default UpdateCalcVarFromInput;
