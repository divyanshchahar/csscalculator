import uuid from "react-uuid";

import RenderAbsoluteVars from "./RenderAbsoluteVars";

function CssVar(args) {
  if (args.param.search(/calc\((.*)\)/)) {
    return <RenderAbsoluteVars param={args.param} />;
  } else {
    return <div className="css-var calculated">{args.param}</div>;
  }
}

export default CssVar;
