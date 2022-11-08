// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "../components/CssVar";

function ListOfVar() {
  const [items, setitems] = useState(["50px", "calc(var(--h1) * 0.8)"]);
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
