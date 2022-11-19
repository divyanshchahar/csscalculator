function SplitVarValue(arg) {
  let [varQuantity] = arg.match(/\d*/g);
  let [varUnit] = arg.match(/\D+/g);

  // in regular expression of varUnit "+" is used, instead of "*" as "*" was returning an empty string

  return [varQuantity, varUnit];
}

export default SplitVarValue;
