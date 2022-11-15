function UpdateVarInLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  obj[varName] = varValue;
}

export default UpdateVarInLocal;
