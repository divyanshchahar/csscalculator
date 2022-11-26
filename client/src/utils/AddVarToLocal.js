import CheckLocalStorage from "./CheckLocalStorage";
import InitializeLocalStorage from "./InitializeLocalStorage";
import UpdateLocalStorage from "./UpdateLocalStorage";

/**
 * Function handle insertion and updation of variables in local storage
 * @param {string} varName - name of the variable
 * @param {string} varValue - value of the variable eg _10vh_ , _5px_
 */

function AddVarToLocal(varName, varValue) {
  if (CheckLocalStorage()) {
    UpdateLocalStorage(varName, varValue);
  } else {
    InitializeLocalStorage(varName, varValue);
  }
}

export default AddVarToLocal;
