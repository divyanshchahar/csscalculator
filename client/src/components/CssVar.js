import uuid from "react-uuid";

import RenderAbsoluteVars from "./RenderAbsoluteVars";
import RenderCalcVars from "./RenderCalcVars";

/**
 * componenet to render varaible
 * @param {object} arg - list item
 * @returns {HTMl}
 */

function CssVar(arg) {
  const temp = arg.param.userInput;
  const pattern = /calc\((.*)\)/g;
  if (pattern.test(arg.param.userInput)) {
    return <RenderCalcVars param={arg.param.userInput} />;
  } else {
    return <RenderAbsoluteVars param={arg.param.userInput} />;
  }
}

export default CssVar;
