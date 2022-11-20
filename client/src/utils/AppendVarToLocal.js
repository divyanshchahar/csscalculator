/**
 * appends varaibale anme and value to local storage
 * @param {array} arg - array of varaible anme and varaible value
 */

function AppendVarToLocal(arg) {
  const [varName, varValue] = arg;
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  const temp = { ...obj, ...{ [varName]: varValue } };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default AppendVarToLocal;
