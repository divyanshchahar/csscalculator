/**
 * Function to delete list item
 * @param {string} itemID - `id` attribute of the object
 * @param {array} stateVar - array of state varaibles
 * @param {function} stateFunc - function to modify state varaible
 */

function DeleTeListItem(itemID, stateVar, stateFunc) {
  const newArr = stateVar.filter((item) => {
    return item.id !== itemID;
  });

  stateFunc(newArr);
}

export default DeleTeListItem;
