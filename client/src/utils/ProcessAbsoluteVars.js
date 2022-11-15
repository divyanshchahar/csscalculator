function ProcessAbsoluteVars(arg) {
  let [varName, temp] = arg.split(":");

  temp = temp.trim();
  const varValue = temp.replace(";", "");

  return [varName, varValue];
}

export default ProcessAbsoluteVars;
