// IMPORTING FUNCTIONALITY
import UpdateBox from "../components/UpdateBox";
import DeleteButton from "../components/DeleteButton";

// I PORTING REACR FUNCTIONALITY
import { useState } from "react";

/**
 * Layout to render varaible and delete button
 * @param {array} args - an array comprised of `single state variable` , `array of state variables` and `state function`
 * @returns {HTMl}
 */

function CssVar(args) {
  const [item, stateVar, stateFunc] = args.params;
  const pattern = /calc\((.*)\)/g;

  const [isEditable, setIsEditable] = useState(false);

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
      return (
        <>
          <div className="css-var" onClick={() => setIsEditable(!isEditable)}>
            <div className="calculated">{item.userInput}</div>
            <DeleteButton params={[item.id, stateVar, stateFunc]} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="css-var" onClick={() => setIsEditable(!isEditable)}>
            <div className="absolute">{item.userInput}</div>
            <DeleteButton params={[item.id, stateVar, stateFunc]} />
          </div>
        </>
      );
    }
  }
}

export default CssVar;
