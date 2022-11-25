import ListOfVar from "./ListOfVar";
import InputVars from "../components/InputVars";
import TopNavBar from "./TopNavBar";

/**
 * Layout to render the list of items and text input box
 * @returns {HTML} -  returns HTML from @function ListofVar and @function InputVars
 */

function ItemList() {
  return (
    <div className="items-list">
      <TopNavBar />
      <ListOfVar />
      <InputVars />
    </div>
  );
}

export default ItemList;