import deleteIcon from "../assets/delete_icon.svg";
import DeleTeListItem from "../utils/DeleTeListItem";

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
