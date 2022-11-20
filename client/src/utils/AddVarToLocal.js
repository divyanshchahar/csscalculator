import CheckLocalStorage from "./CheckLocalStorage";
import InitializeLocalStorage from "./InitializeLocalStorage";
import UpdateLocalStorage from "./UpdateLocalStorage";

/**
 * function to add variable to local storage
 * @param {string} arg - string containing variable name and variable value
 */

function AddVarToLocal(arg) {
  if (CheckLocalStorage()) {
    UpdateLocalStorage(arg);
  } else {
    InitializeLocalStorage(arg);
  }
}

export default AddVarToLocal;
