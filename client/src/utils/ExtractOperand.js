/**
 * generate an array of operands in the order they ocuur
 * @param {array} arg arrray resolved value of refrence variable and calculation string containing _calc(__calculation__)_
 * @returns {array} array containing operands in the order they occur in calculation string
 */

function ExtractOperand(arg) {
  const [operand1, calcString] = arg;

  const decimalString = /\./g;
  const intAfterOperand = /[\*\+\-\/]\s\d+/g;
  const intBeforeOperand = /\d+\s[\*\+\-\/]/g;
  const decimalBeforeOperand = /\d+\.\d+\s[\*\+\-\/]/g;
  const decimalAfterOperand = /[\*\+\-\/]\s\d+.\d+/g;
  const wholeOperand = /\d+/g;
  const decimalOperand = /\d+\.\d+/g;

  if (decimalString.test(calcString)) {
    if (decimalBeforeOperand.test(arg)) {
      let [temp] = calcString.match(decimalBeforeOperand);
      [temp] = temp.match(decimalOperand);
      return [operand1, temp.trim()];
    }

    if (decimalAfterOperand.test(arg)) {
      let [temp] = calcString.match(decimalAfterOperand);
      [temp] = temp.match(decimalOperand);
      return [operand1, temp.trim()];
    }
  } else {
    if (intAfterOperand.test(arg)) {
      let [temp] = calcString.match(intAfterOperand);
      [temp] = temp.match(wholeOperand);
      return [operand1, temp.trim()];
    }

    if (intBeforeOperand.test(arg)) {
      let [temp] = calcString.match(intBeforeOperand);
      [temp] = temp.match(wholeOperand);
      return [operand1, temp.trim()];
    }
  }
}

export default ExtractOperand;
