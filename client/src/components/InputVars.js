import CreateListItem from "../utils/CreateListItem";

import { useState } from "react";

/**
 * Component to take user input
 * @returns {HTML} input of type text
 */

function InputVars(args) {
  const [stateVar, stateFunc] = args.param;
  const [inputString, setInputString] = useState();

  return (
    <input
      type="text"
      value={inputString}
      onChange={(e) => setInputString(e.target.value)}
      onKeyDown={(e) => {
        CreateListItem(e, stateVar, stateFunc);
        if (e.key === "Enter") setInputString("");
      }}
    />
  );
}

export default InputVars;
