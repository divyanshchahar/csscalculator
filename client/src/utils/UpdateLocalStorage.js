import CheckVarInLocal from "./CheckVarInLocal";
import AppendVarToLocal from "./AppendVarToLocal";
import UpdateVarInLocal from "./UpdateVarInLocal";

/**
 * function to update variable in local storage
 * @param {string} varName - variable name
 * @param {string} varValue - value of variable eg _10vh_, _5px_
 */

function UpdateLocalStorage(varName, varValue) {
  if (CheckVarInLocal(varName)) {
    UpdateVarInLocal(varName, varValue);
  } else {
    AppendVarToLocal(varName, varValue);
  }
}

export default UpdateLocalStorage;
