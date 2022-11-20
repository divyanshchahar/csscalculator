import CheckVarInLocal from "./CheckVarInLocal";
import AppendVarToLocal from "./AppendVarToLocal";
import UpdateVarInLocal from "./UpdateVarInLocal";

/**
 * function to update variable in local storage
 * @param {string} arg variable name
 */

function UpdateLocalStorage(arg) {
  if (CheckVarInLocal(arg)) {
    UpdateVarInLocal(arg);
  } else {
    AppendVarToLocal(arg);
  }
}

export default UpdateLocalStorage;
