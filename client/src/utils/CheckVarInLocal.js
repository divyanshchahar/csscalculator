/**
 * checks the presence of variable in lolcal storage, return tue if the variable is present otherwise returns false
 * @param {string} varName - variable name
 * @returns {boolean}
 */

function CheckVarInLocal(varName) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  if (obj.hasOwnProperty(varName)) {
    return true;
  } else {
    return false;
  }
}

export default CheckVarInLocal;
