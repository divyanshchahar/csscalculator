import uuid from "react-uuid";

import RenderAbsoluteVars from "./RenderAbsoluteVars";
import RenderCalcVars from "./RenderCalcVars";

/**
 * componenet to render varaible
 * @param {string} args - string of varaible
 * @returns {HTMl componenet}
 */

function CssVar(args) {
  const pattern = /calc\((.*)\)/g;
  if (pattern.test(args.param)) {
    return <RenderCalcVars param={args.param} />;
  } else {
    return <RenderAbsoluteVars param={args.param} />;
  }
}

export default CssVar;
