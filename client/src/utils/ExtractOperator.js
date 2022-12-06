/**
 * Function to extract operator
 * @param {string} arg - calculation string of form __calc(_calculation_)__
 * @returns {string} - binary operator used in calculation
 */

function ExtractOperator(arg) {
  const operatorPattern = /[\*\/\+\-]/g;
  const varPattern = /var\(.*?\)/g;

  let temp = arg.replace(varPattern, "");
  const [operator] = temp.match(operatorPattern);

  return operator;
}

export default ExtractOperator;
