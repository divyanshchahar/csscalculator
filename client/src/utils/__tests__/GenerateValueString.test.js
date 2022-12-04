import GenerateValueString from "../GenerateValueString";

describe("Testing GenerateValueString", () => {
  it('Passing "10" and "vw" should return "10vw"', () => {
    expect(GenerateValueString("10", "vw")).toBe("10vw");
  });
});
