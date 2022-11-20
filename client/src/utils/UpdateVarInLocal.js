/**
 * updates value of a variable in local storage
 * @param {array} arg array of varaible name and variable value
 */

function UpdateVarInLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  obj[varName] = varValue;

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(obj));
}

export default UpdateVarInLocal;
