function GetFromLocalStorage(stateFunc) {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CALCULATOR"));

  try {
    if (obj.length > 0) {
      stateFunc(obj);
    }
  } catch (error) {}
}

export default GetFromLocalStorage;
