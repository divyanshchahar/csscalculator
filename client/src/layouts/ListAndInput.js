// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "./CssVar";
import InputBox from "../components/InputBox";

/**
 * layout to render list of varaibles
 * @returns {HTML} - div elemet or text input
 */

function ListAndInput() {
  const [items, setItems] = useState([
    { id: "a1", userInput: "--h1: 10vw;" },
    { id: "a2", userInput: "--h2: calc(var(--h1) * 0.8);" },
  ]);

  return (
    <div className="list-and-input">
      {items ? (
        <div className="list-of-vars">
          {items.map((item) => {
            return <CssVar params={[item, items, setItems]} />;
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
