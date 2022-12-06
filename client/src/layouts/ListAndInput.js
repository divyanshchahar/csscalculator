// IMPORTING REACT FUNCTINALITY
import { useState, useEffect } from "react";

// IMPORTING CUSTOM FUNCTIONALITY
import CssVar from "./CssVar";
import ErrorVar from "./ErrorVar";
import InputBox from "../components/InputBox";
import GetFromLocalStorage from "../utils/GetFromLocalStorage";
import UpdateLocalStorage from "../utils/UpdateLocalStorage";

/**
 * Layout to render list of varaibles
 * @returns {HTML} - div elemet or text input
 */

function ListAndInput() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    GetFromLocalStorage(setItems);
  }, []);

  useEffect(() => {
    UpdateLocalStorage(items);
  }, [items]);

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
