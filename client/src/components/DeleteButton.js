// IMPORTING FUNCTIONALITY
import DeleTeListItem from "../utils/DeleTeListItem";

// IMPORTING ASSETS
import deleteIcon from "../assets/delete_icon.svg";

/**
 * Componenet to render delete button
 * @param {array} args array of `itemID`, `stateVar` and `stateFunc`
 * @returns {HTML} - HTML to render delete button
 */

function DeleteButton(args) {
  const [itemID, stateVar, stateFunc] = args.params;
  return (
    <div
      className="inline-button"
      onClick={() => DeleTeListItem(itemID, stateVar, stateFunc)}
    >
      <img src={deleteIcon} className="inline-icon" />
    </div>
  );
}

export default DeleteButton;
