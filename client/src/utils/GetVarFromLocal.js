function GetVarFromLocal(arg) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  const varValue = obj[arg];

  return varValue;
}

export default GetVarFromLocal;
