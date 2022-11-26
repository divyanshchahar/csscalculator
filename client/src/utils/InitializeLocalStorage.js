/**
 * initialized local storage with variable name and value
 * @param {string} varName - variable name
 * @param {string} varValue - value of variable eg: _10vh_, _55px_
 */

function InitializeLocalStorage(varName, varValue) {
  const temp = { [varName]: varValue };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default InitializeLocalStorage;
