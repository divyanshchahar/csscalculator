function GenerateValueString(arg) {
  const [calculatedValue, varUnit] = arg;

  return `${calculatedValue}${varUnit}`;
}

export default GenerateValueString;
