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
 * Function to update single calculated varaible
 * @param {string} itemID - id of the object which neeeds to be updated
 * @param {string} inputString - user input
 * @param {array} stateVar - array of state variables
 */

function UpdateCalcVar(itemID, inputString, stateVar) {
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

  const [varName, string2] = SplitByColon(inputString);

  const check3 = ValidVar(varName);
  if (check3 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check3, stateVar);
  }

  const check4 = HasOperator(string2);
  if (check4 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check4, stateVar);
  }

  const refrenceVar = ExtractVar(string2);

  const check5 = VarExists(refrenceVar, stateVar);
  if (check5 === true) {
  } else {
    return GenerateErrorObject(itemID, inputString, check5, stateVar);
  }

  const varValue = GetVarValue(refrenceVar, stateVar);

  const [varQuant, varUnit] = SplitVarValue(varValue);

  const operands = ExtractOperand(varQuant, string2);

  const operator = ExtractOperator(string2);

  const resolvedValue = PerformCalculation(operands, operator);

  const valueString = GenerateValueString(resolvedValue, varUnit);

  return GenerateGoodObject(
    itemID,
    inputString,
    varName,
    valueString,
    stateVar
  );
}

export default UpdateCalcVar;
