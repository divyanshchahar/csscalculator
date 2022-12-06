/**
 * Function to check if the input string has binary mathematical operator ( * / + -)
 * @param {string} arg - input string of the form _calc(__calculation__)_
 * @returns `true` if the string has either of addition, subtraction, division or multiplication operator otherwise return error message __no binary operator present in the string__
 */

function HasOperator(arg) {
  const operatorsPattern = /[\*\/\+\-]/g;
  const varPattern = /var\(.*?\)/g;
  const temp = arg.replace(varPattern, "");
  if (operatorsPattern.test(temp)) {
    return true;
  }
  return "no binary operator present in the string";
}

export default HasOperator;
