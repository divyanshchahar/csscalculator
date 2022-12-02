/**
 * Function to update loal storage
 * @param {array} arg - array of state variables
 */

function UpdateLocalStorage(arg) {
  const obj = JSON.stringify(arg);
  window.localStorage.setItem("CSS_CALCULATOR", obj);
}

export default UpdateLocalStorage;
