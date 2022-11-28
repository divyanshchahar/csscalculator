import { useState, useEffect } from "react";
import UpdateListItem from "../utils/UpdateListItem";

/**
 * Componenet to take user input for updating list items
 * @param {array} args - array consisting of `single state object` , `array of statse object`, `function to modify state object`, `state variable to render or hide text input`, `state function to vhnage state variable which will display or hide state variable`
 * @returns {HTML} input of type text
 */

function UpdateBox(args) {
  const [item, stateVar, stateFunc, isEditable, setIsEditable] = args.param;

  const [userInput, setUserInput] = useState();

  useEffect(() => {
    setUserInput(item.userInput);
  }, []);

  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => {
        setUserInput(e.target.value);
      }}
      onKeyDown={(e) => {
        UpdateListItem(e, item.id, stateVar, stateFunc);
        if (e.key === "Enter") {
          setIsEditable(!isEditable);
        }
      }}
    />
  );
}

export default UpdateBox;
