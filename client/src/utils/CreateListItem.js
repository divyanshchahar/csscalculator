import { v4 as uuidv4 } from "uuid";

/**
 * Function to add to the list of variables
 * @param {eventObject} e - event object passed from text input
 * @param {state variable} stateVar - state variable
 * @param {state Function} stateFunc - state function which will be used to change the state function
 */
function CreateListItem(inputstring, stateVar, stateFunc) {
  stateFunc([...stateVar, { id: uuidv4(), userInput: inputstring }]);
}

export default CreateListItem;
