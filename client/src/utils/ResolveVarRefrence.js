import ExtractVar from "./ExtractVar";
import GetVarFromLocal from "./GetVarFromLocal";

/**
 * function to resolve variable from calculated variable string
 * @param {string} arg string of calculated varaiable
 * @returns {string} value of variable
 */

function ResolveVarRefrence(arg) {
  const varName = ExtractVar(arg);
  const varValue = GetVarFromLocal(varName);

  return varValue;
}

export default ResolveVarRefrence;
