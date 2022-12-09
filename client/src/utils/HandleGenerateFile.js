/**
 * Function to make api call to generate file
 */

function HandleGenerateFile() {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CALCULATOR"));

  try {
    if (obj.length !== 0) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => {});
    }
  } catch (error) {
    alert(`${error} \n This error usually occurs no varaibles are present`);
  }
}

export default HandleGenerateFile;
