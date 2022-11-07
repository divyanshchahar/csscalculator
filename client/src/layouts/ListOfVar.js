// IMPORTING REACT FUNCTINALITY
import { useState } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "../components/CssVar";

function ListOfVar() {
  const [items, setitems] = useState();
  return (
    <>
      {items ? (
        items.map((item) => {
          return <CssVar param={item} />;
        })
      ) : (
        <div>no variables added</div>
      )}
    </>
  );
}

export default ListOfVar;
