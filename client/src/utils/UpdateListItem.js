/**
 * Function to change the `userInput` of the state object
 * @param {event object} e - event object from text input
 * @param {string} itemID - `id` of the object whose `userInput` needs to be changed
 * @param {array} stateVar - state varible
 * @param {function} satateFunc - state function
 */

function UpdateListItem(inputString, itemID, stateVar, satateFunc) {
  const newArr = stateVar.map((item) => {
    if (item.id === itemID) {
      return { ...item, userInput: inputString };
    }
    return item;
  });
  satateFunc(newArr);
}

export default UpdateListItem;
