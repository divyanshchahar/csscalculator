import UpdateBox from "../components/UpdateBox";

import DeleteButton from "../components/DeleteButton";
// import DeleteButton from "./DeleteButton";
// import ExportCssButton from "./ExportCssButton";

import { useState } from "react";

/**
 * componenet to render varaible
 * @param {array} args - an array comprised of `single state variable` , `array of state variables` and `state function`
 * @returns {HTMl}
 */

function ErrorVar(args) {
  const [item, stateVar, stateFunc] = args.params;

  const [isEditable, setIsEditable] = useState(false);

  if (isEditable) {
    return (
      <>
        <div className="css-var">
          <UpdateBox
            param={[item, stateVar, stateFunc, isEditable, setIsEditable]}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="css-var error"
          title={item.errorMessage}
          onClick={() => {
            setIsEditable(!isEditable);
          }}
        >
          {item.userInput}
          <DeleteButton params={[item.id, stateVar, stateFunc]} />
        </div>
      </>
    );
  }
}

export default ErrorVar;
