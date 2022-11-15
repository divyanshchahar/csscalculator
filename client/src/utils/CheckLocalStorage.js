function CheckLocalStorage() {
  const localStore = window.localStorage.getItem("CSS_CACLCULATOR");

  if (localStore == null) {
    return false;
  } else {
    return true;
  }
}

export default CheckLocalStorage;
