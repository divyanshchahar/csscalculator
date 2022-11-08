import uuid from "react-uuid";

function CssVar(args) {
  if (args.param.search(/calc\((.*)\)/)) {
    return <div className="css-var absolute">{args.param}</div>;
  } else {
    return <div className="css-var calculated">{args.param}</div>;
  }
}

export default CssVar;
