import CheckLocalStorage from "./CheckLocalStorage";
import InitializeLocalStorage from "./InitializeLocalStorage";
import CheckVarInLocal from "./CheckVarInLocal";
import UpdateLocalStorage from "./UpdateLocalStorage";

function AddVarToLocal(arg) {
  if (CheckLocalStorage()) {
    UpdateLocalStorage(arg);
  } else {
    InitializeLocalStorage(arg);
  }
}

export default AddVarToLocal;
