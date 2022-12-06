const generateString = require("./generateString");
const writeFile = require("./writeFile");

function handlePost(arg) {
  const generatedString = generateString(arg);
  writeFile(generatedString);
}

module.exports = handlePost;
