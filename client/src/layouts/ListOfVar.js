// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "../components/CssVar";

function ListOfVar() {
  const [items, setitems] = useState(["a", "b", "c"]);
  return (
    <>
      {items ? (
        <div>
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
