import HandleCalcVar from "../utils/HandleCalcVar";

/**
 * componenet to render calculated varaible
 * @param {string} arg - calculation variable string
 * @returns {HTML componenets}
 */

function RenderCalcVars(arg) {
  const calcString = arg.param;

  HandleCalcVar(calcString);

  return <div className="css-var calculated">{arg.param}</div>;
}

export default RenderCalcVars;
