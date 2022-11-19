/**
 * retrives the value of a variable from local storage
 * @param {string} arg - name of the variable to be extracted from local storage
 * @returns {string} value of the variable stored in local storage
 */

function GetVarFromLocal(arg) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  const varValue = obj[arg];

  return varValue;
}

export default GetVarFromLocal;
