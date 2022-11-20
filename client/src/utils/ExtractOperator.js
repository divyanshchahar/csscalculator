/**
 * extracts operator
 * @param {string} arg - calculation string of for _calc(__calculation__)_
 * @returns
 */

function ExtractOperator(arg) {
  const operatorPattern = /[\*\/\+\-]/g;
  const varPattern = /var\(.*?\)/g;

  let temp = arg.replace(varPattern, "");
  const [operator] = temp.match(operatorPattern);

  return operator;
}

export default ExtractOperator;
