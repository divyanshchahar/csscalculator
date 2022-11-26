import ProcessAbsoluteVars from "../utils/ProcessAbsoluteVars";
import AddVarToLocal from "../utils/AddVarToLocal";

/**
 * componenet to render absolute variable
 * @param {string} arg - string of absolute variable
 * @returns {HTML} - HTML componenents to render absolute variables
 */

function RenderAbsoluteVars(arg) {
  const [varName, varValue] = ProcessAbsoluteVars(arg.param);

  AddVarToLocal(varName, varValue);

  return <div className="css-var absolute">{arg.param}</div>;
}

export default RenderAbsoluteVars;
