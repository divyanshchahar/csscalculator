// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "../components/CssVar";

/**
 * layout to render list of varaibles
 * @returns {HTML components}
 */

function ListOfVar() {
  const [items, setItems] = useState([
    "--h1: 10vw;",
    "--h2: calc(var(--h1) * 0.8);",
  ]);
  return (
    <>
      {items ? (
        <div className="list-of-vars">
          {items.map((item) => {
            return <CssVar param={item} />;
          })}
        </div>
      ) : (
        <div>no variables added</div>
      )}
    </>
  );
}

export default ListOfVar;
