// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "../components/CssVar";
import InputBox from "../components/InputBox";

/**
 * layout to render list of varaibles
 * @returns {HTML components}
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
            return <CssVar param={item} />;
          })}
        </div>
      ) : (
        <div>no variables added</div>
      )}
      <InputBox param={[items, setItems]} />
    </div>
  );
}

export default ListAndInput;
