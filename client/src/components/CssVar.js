import HandleCalcVar from "../utils/HandleCalcVar";
import AddVarToLocal from "../utils/AddVarToLocal";
import UpdateBox from "./UpdateBox";

import DeleteButton from "./DeleteButton";
import ExportCssButton from "./ExportCssButton";

import { useState } from "react";

/**
 * componenet to render varaible
 * @param {array} args - an array comprised of `single state variable` , `array of state variables` and `state function`
 * @returns {HTMl}
 */

function CssVar(args) {
  const [item, stateVar, stateFunc] = args.params;
  const pattern = /calc\((.*)\)/g;

  const [isEditable, setIsEditable] = useState();

  if (isEditable) {
    return (
      <div className="css-var">
        <UpdateBox
          param={[item, stateVar, stateFunc, isEditable, setIsEditable]}
        />
      </div>
    );
  } else {
    if (pattern.test(item.userInput)) {
      HandleCalcVar(item.userInput);
      return (
        <>
          <div
            className="css-var calculated"
            onClick={() => setIsEditable(!isEditable)}
          >
            {item.userInput}
          </div>
          <DeleteButton params={[item.id, stateVar, stateFunc]} />
        </>
      );
    } else {
      AddVarToLocal(item.userInput);
      return (
        <>
          <div
            className="css-var absolute"
            onClick={() => setIsEditable(!isEditable)}
          >
            {item.userInput}
          </div>
          <DeleteButton params={[item.id, stateVar, stateFunc]} />
        </>
      );
    }
  }
}

export default CssVar;
