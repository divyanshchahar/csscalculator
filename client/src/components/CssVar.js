import uuid from "react-uuid";

function CssVar(args) {
  return <div key={uuid()}>{args.param}</div>;
}

export default CssVar;
