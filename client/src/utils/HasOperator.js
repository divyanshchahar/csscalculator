/**
 * Checks if the input string has binary mathematical operator ( * / + -)
 * @param {string} arg - input string of the form __calc( _calculation_ )__
 * @returns `true` if the string has either of addition, subtraction, division or multiplication operator
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
