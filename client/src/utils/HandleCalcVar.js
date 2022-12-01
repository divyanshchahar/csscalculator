import SplitByColon from "./SplitByColon";
import ResolveVarRefrence from "./ResolveVarRefrence";
import SplitVarValue from "./SplitVarValue";
import ExtractOperand from "./ExtractOperand";
import ExtractOperator from "./ExtractOperator";
import PerformCalculation from "./PerformCalculation";
import GenerateValueString from "./GenerateValueString";
import AddVarToLocal from "./AddVarToLocal";

/**
 * function to handle the calculated variable string
 * @param {string} arg - string of the form _--varname: calc(__calculation__);_
 */

function HandleCalcVar(arg) {
  const [varName, calcString] = SplitByColon(arg);
  const varValue = ResolveVarRefrence(calcString);
  const [varQuantity, varUnit] = SplitVarValue(varValue);
  const operands = ExtractOperand([varQuantity, calcString]);
  const operator = ExtractOperator(calcString);
  const calculatedValue = PerformCalculation([operands, operator]);
  const calcultedValueString = GenerateValueString([calculatedValue, varUnit]);
  AddVarToLocal([varName, calcultedValueString]);
}

export default HandleCalcVar;
