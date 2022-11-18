import ExtractVar from "./ExtractVar";
import GetVarFromLocal from "./GetVarFromLocal";

function ResolveVarRefrence(arg) {
  const varName = ExtractVar(arg);
  const varValue = GetVarFromLocal(varName);

  return varValue;
}

export default ResolveVarRefrence;
