function CheckVarInLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  if (obj.hasOwnProperty(varName)) {
    return true;
  } else {
    return false;
  }
  //   console.log(obj.hasOwnProperty(varName));
}

export default CheckVarInLocal;
