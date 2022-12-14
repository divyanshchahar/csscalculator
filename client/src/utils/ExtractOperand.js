/**
 * Function to generate an array of operands in the order they ocuur
 * @param {string} operand1 - resolved value of refrence variable
 * @param {string} calcString - calculation string containing __calc(_calculation_)__
 * @returns {array} array containing operands in the order they occur in calculation string
 */

function ExtractOperand(operand1, calcString) {
  const decimalString = /\./g;
  const intAfterOperand = /[\*\+\-\/]\s\d+/g;
  const intBeforeOperand = /\d+\s[\*\+\-\/]/g;
  const decimalBeforeOperand = /\d+\.\d+\s[\*\+\-\/]/g;
  const decimalAfterOperand = /[\*\+\-\/]\s\d+.\d+/g;
  const wholeOperand = /\d+/g;
  const decimalOperand = /\d+\.\d+/g;

  if (decimalString.test(calcString)) {
    if (decimalBeforeOperand.test(calcString)) {
      let [temp] = calcString.match(decimalBeforeOperand);
      [temp] = temp.match(decimalOperand);
      return [temp.trim(), operand1];
    }

    if (decimalAfterOperand.test(calcString)) {
      let [temp] = calcString.match(decimalAfterOperand);
      [temp] = temp.match(decimalOperand);
      return [operand1, temp.trim()];
    }
  } else {
    if (intAfterOperand.test(calcString)) {
      let [temp] = calcString.match(intAfterOperand);
      [temp] = temp.match(wholeOperand);
      return [operand1, temp.trim()];
    }

    if (intBeforeOperand.test(calcString)) {
      let [temp] = calcString.match(intBeforeOperand);
      [temp] = temp.match(wholeOperand);
      return [temp.trim(), operand1];
    }
  }
}

export default ExtractOperand;
