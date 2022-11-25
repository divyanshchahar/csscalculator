import { useState } from "react";

/**
 * Component to take user input
 * @returns {HTML} input of type text
 */

function InputVars() {
  const [inputString, setinputString] = useState();

  return (
    <input
      type="text"
      value={inputString}
      onChange={(e) => setinputString(e.value.inputString)}
    />
  );
}

export default InputVars;
