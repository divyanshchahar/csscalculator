function ExtractVar(arg) {
  let [varName] = arg.match(/var\(.*?\)/g);

  varName = varName.replace("var(", "");
  varName = varName.replace(")", "");
  varName = varName.trim();

  return varName;
}

export default ExtractVar;
