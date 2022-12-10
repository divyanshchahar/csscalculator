/**
 * Function to make api call to generate file
 */

import { saveAs } from "file-saver";

async function HandleGenerateFile() {
  const obj = JSON.parse(window.localStorage.getItem("CSS_CALCULATOR"));

  try {
    if (obj.length !== 0) {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const fileName = response.headers
        .get("content-disposition")
        .split(";")
        .find((n) => n.includes("filename="))
        .replace("filename=", "")
        .trim();

      const blob = await response.blob();

      saveAs(blob, fileName);
    }
  } catch (error) {
    alert(
      `${error} \n This error usually occurs when no varaibles are present`
    );
  }
}

export default HandleGenerateFile;
