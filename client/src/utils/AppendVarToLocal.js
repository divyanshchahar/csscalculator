/**
 * appends varaibale anme and value to local storage
 * @param {string} varName - name of the variable
 * @param {string} varValue - value of the variable eg _10vh_ , _5px_
 */

function AppendVarToLocal(varName, varValue) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CACLCULATOR"));

  const temp = { ...obj, ...{ [varName]: varValue } };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default AppendVarToLocal;
