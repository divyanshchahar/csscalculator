import HandleCalcVar from "../utils/HandleCalcVar";

function RenderCalcVars(arg) {
  const calcString = arg.param;

  HandleCalcVar(calcString);

  return <div className="css-var calculated">{arg.param}</div>;
}

export default RenderCalcVars;
