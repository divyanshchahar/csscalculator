/**
 * Function to change the `userInput` of the state object
 * @param {event object} e - event object from text input
 * @param {string} itemID - `id` of the object whose `userInput` needs to be changed
 * @param {array} stateVar - state varible
 * @param {function} satateFunc - state function
 */

function UpdateListItem(e, itemID, stateVar, satateFunc) {
  if (e.key === "Enter") {
    const newArr = stateVar.map((item) => {
      if (item.id === itemID) {
        return { ...item, userInput: e.target.value };
      }
      return item;
    });
    satateFunc(newArr);
  }
}

export default UpdateListItem;
