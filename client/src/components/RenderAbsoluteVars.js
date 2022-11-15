import ProcessAbsoluteVars from "../utils/ProcessAbsoluteVars";
import AddVarToLocal from "../utils/AddVarToLocal";

function RenderAbsoluteVars(arg) {
  const [varName, varValue] = ProcessAbsoluteVars(arg.param);

  AddVarToLocal([varName, varValue]);

  return <div className="css-var absolute">{arg.param}</div>;
}

export default RenderAbsoluteVars;
