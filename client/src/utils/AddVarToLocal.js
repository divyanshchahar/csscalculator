import CheckLocalStorage from "./CheckLocalStorage";
import InitializeLocalStorage from "./InitializeLocalStorage";

function AddVarToLocal(arg) {
  if (CheckLocalStorage()) {
    // code yet to follow
  } else {
    InitializeLocalStorage(arg);
  }
}

export default AddVarToLocal;
