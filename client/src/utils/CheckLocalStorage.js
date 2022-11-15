function CheckLocalStorage() {
  const localStore = window.localStorage.getItem("CSS_CACLCULATOR");

  if (localStore == null) {
    return true;
  } else {
    return false;
  }
}

export default CheckLocalStorage;
