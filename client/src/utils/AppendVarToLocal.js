function AppendVarToLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  const temp = { ...obj, ...{ [varName]: varValue } };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default AppendVarToLocal;
