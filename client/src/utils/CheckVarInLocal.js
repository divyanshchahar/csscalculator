function CheckVarInLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  if (obj.hasOwnProperty(varName)) {
    return true;
  } else {
    return false;
  }
}

export default CheckVarInLocal;
