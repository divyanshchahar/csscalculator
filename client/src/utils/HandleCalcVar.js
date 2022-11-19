import SplitCalcVarString from "./SplitCalcVarString";
import ResolveVarRefrence from "./ResolveVarRefrence";
import SplitVarValue from "./SplitVarValue";
import ExtractOperand from "./ExtractOperand";
import ExtractOperator from "./ExtractOperator";
import PerformCalculation from "./PerformCalculation";
import GenerateValueString from "./GenerateValueString";
import AddVarToLocal from "./AddVarToLocal";

function HandleCalcVar(arg) {
  const [varName, calcString] = SplitCalcVarString(arg);
  const varValue = ResolveVarRefrence(calcString);
  const [varQuantity, varUnit] = SplitVarValue(varValue);
  const operands = ExtractOperand([varQuantity, calcString]);
  const operator = ExtractOperator(calcString);
  const calculatedValue = PerformCalculation([operands, operator]);
  const calcultedValueString = GenerateValueString([calculatedValue, varUnit]);
  AddVarToLocal([varName, calcultedValueString]);
}

export default HandleCalcVar;
