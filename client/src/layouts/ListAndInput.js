// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "./CssVar";
import ErrorVar from "./ErrorVar";
import InputBox from "../components/InputBox";

/**
 * layout to render list of varaibles
 * @returns {HTML} - div elemet or text input
 */

function ListAndInput() {
  const [items, setItems] = useState([
    {
      id: "a1",
      varName: "--h1",
      varValue: "80vw",
      hasError: false,
      errorMessage: null,
      userInput: "--h1: 80vw;",
    },
    {
      id: "c1",
      varName: "--h2",
      varValue: "40vw",
      hasError: false,
      errorMessage: null,
      userInput: "--h2: calc(var(--h1) * 0.5);",
    },
  ]);

  return (
    <div className="list-and-input">
      {items ? (
        <div className="list-of-vars">
          {items.map((item) => {
            if (item.hasError) {
              return <ErrorVar params={[item, items, setItems]} />;
            } else {
              return <CssVar params={[item, items, setItems]} />;
            }
          })}
        </div>
      ) : (
        <div className="list-and-input">no variables added</div>
      )}
      <InputBox params={[items, setItems]} />
    </div>
  );
}

export default ListAndInput;
