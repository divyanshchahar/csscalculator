function InitializeLocalStorage(arg) {
  const [varName, varValue] = arg;
  const temp = { [varName]: varValue };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default InitializeLocalStorage;
