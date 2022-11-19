function PerformCalculation(args) {
  const [operands, operator] = args;
  const [operand1, operand2] = operands;

  switch (operator) {
    case "+":
      return Number(operand1) + Number(operand2);

    case "-":
      return Number(operand1) - Number(operand2);

    case "/":
      return Number(operand1) / Number(operand2);

    case "*":
      return Number(operand1) * Number(operand2);

    default:
      return;
  }
}

export default PerformCalculation;
