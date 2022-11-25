import { useState } from "react";

/**
 * Component to take user input
 * @returns {HTML} input of type text
 */

function InputVars() {
  const [inputString, setInputString] = useState();

  return (
    <input
      type="text"
      value={inputString}
      onChange={(e) => setInputString(e.target.value)}
    />
  );
}

export default InputVars;
