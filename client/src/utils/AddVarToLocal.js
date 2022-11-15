import CheckLocalStorage from "./CheckLocalStorage";
import InitializeLocalStorage from "./InitializeLocalStorage";

function AddVarToLocal(arg) {
  console.log(CheckLocalStorage());
  if (CheckLocalStorage()) {
    // code yet to follow
  } else {
    console.log("error in code");
    InitializeLocalStorage(arg.param);
  }
}

export default AddVarToLocal;
