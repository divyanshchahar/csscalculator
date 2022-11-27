import { useState, useEffect } from "react";

/**
 *
 * @param {string} arg
 * @returns {HTML} input of type text for updating list items
 */

function UpdateBox(arg) {
  const [inputString, setInputString] = useState();

  useEffect(() => {
    setInputString(arg);
  }, []);

  return (
    <input
      type="text"
      value={inputString}
      onChnage={(e) => {
        setInputString(e.target.value);
      }}
    />
  );
}

export default UpdateBox;
