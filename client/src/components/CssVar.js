import HandleCalcVar from "../utils/HandleCalcVar";
import AddVarToLocal from "../utils/AddVarToLocal";

/**
 * componenet to render varaible
 * @param {object} arg - list item
 * @returns {HTMl}
 */

function CssVar(arg) {
  const temp = arg.param.userInput;
  const pattern = /calc\((.*)\)/g;
  if (pattern.test(arg.param.userInput)) {
    HandleCalcVar(arg.param.userInput);
    return <div className="css-var calculated">{arg.param.userInput}</div>;
  } else {
    AddVarToLocal(arg.param.userInput);
    return <div className="css-var absolute">{arg.param.userInput}</div>;
  }
}

export default CssVar;
