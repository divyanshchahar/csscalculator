/**
 * initliazes local storage with variable name and varaible value
 * @param {array} arg - array containing varaible name and varaible value
 */

function InitializeLocalStorage(arg) {
  const [varName, varValue] = arg;
  const temp = { [varName]: varValue };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default InitializeLocalStorage;
