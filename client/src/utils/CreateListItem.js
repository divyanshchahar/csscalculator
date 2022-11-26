/**
 * Function to add to the list of variables
 * @param {eventObject} e - event object passed from text input
 * @param {state variable} stateVar - state variable
 * @param {state Function} stateFunc - state function which will be used to change the state function
 */
function CreateListItem(e, stateVar, stateFunc) {
  if (e.key === "Enter") {
    stateFunc([...stateVar, e.target.value]);
  }
}

export default CreateListItem;
