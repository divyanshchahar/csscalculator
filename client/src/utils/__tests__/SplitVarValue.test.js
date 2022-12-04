import SplitVarValue from "../SplitVarValue";

describe("Testing SplitVarValue", () => {
  it('PAssing "10vh" will return ["10","vh"]', () => {
    expect(SplitVarValue("10vh")).toEqual(["10", "vh"]);
  });
});
