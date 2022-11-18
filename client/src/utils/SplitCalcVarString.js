function SplitCalcVarString(arg) {
  let [varName, calcString] = arg.split(":");
  varName = varName.trim();
  calcString = calcString.trim();
  calcString = calcString.replace(";", "");

  return [varName, calcString];
}

export default SplitCalcVarString;
