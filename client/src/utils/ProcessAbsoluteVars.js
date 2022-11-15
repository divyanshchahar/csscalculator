function ProcessAbsoluteVars(arg) {
  let [varName, temp] = arg.split(":");

  temp = temp.trim();
  const varValue = temp.replace(";", "");
  console.log(varValue);

  return [varName, varValue];
}

export default ProcessAbsoluteVars;
