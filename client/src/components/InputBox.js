import CreateListItem from "../utils/CreateListItem";

import { useState } from "react";

/**
 * Component to take user input
 * @returns {HTML} input of type text
 */

function InputBox(args) {
  const [stateVar, stateFunc] = args.params;
  const [inputString, setInputString] = useState();

  return (
    <input
      type="text"
      value={inputString}
      onChange={(e) => setInputString(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
          console.log(e.target.value);
          CreateListItem(e.target.value, stateVar, stateFunc);
          setInputString("");
        }
      }}
    />
  );
}

export default InputBox;
