/**
 *
 * @param {array} operands - array consisting of operands 1 and 2 as two seperate __string__
 * @param {string} operator - array consisting of operand as a __string__
 * @returns {number} - result of calculation
 */

function PerformCalculation(operands, operator) {
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
