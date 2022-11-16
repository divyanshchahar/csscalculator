import uuid from "react-uuid";

import RenderAbsoluteVars from "./RenderAbsoluteVars";

function CssVar(args) {
  const pattern = /calc\((.*)\)/g;
  if (pattern.test(args.param)) {
    return <div className="css-var calculated">{args.param}</div>;
  } else {
    return <RenderAbsoluteVars param={args.param} />;
  }
}

export default CssVar;
