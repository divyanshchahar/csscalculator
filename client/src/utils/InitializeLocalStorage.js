function InitializeLocalStorage(args) {
  const [varName, varValue] = args;
  const temp = { varName: varValue };

  window.localStorage.setItem("CSS_CACLCULATOR", JSON.stringify(temp));
}

export default InitializeLocalStorage;
