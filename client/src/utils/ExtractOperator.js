function ExtractOperator(arg) {
  const operatorPattern = /[\*\/\+\-]/g;
  const varPattern = /var\(.*?\)/g;

  let temp = arg.replace(varPattern, "");
  const [operator] = temp.match(operatorPattern);

  console.log(operator);
}

export default ExtractOperator;
