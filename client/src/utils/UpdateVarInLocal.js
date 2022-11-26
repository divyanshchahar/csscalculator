/**
 * Function to update variable in local storage
 * @param {string} varName
 * @param {string} varValue
 */

function UpdateVarInLocal(varName, varValue) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  obj[varName] = varValue;

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(obj));
}

export default UpdateVarInLocal;
