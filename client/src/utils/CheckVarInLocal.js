/**
 * checks the presence of variable in lolcal storage, return tue if the variable is present otherwise returns false
 * @param {array} arg - variable name and variable value
 * @returns {boolean}
 */

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
