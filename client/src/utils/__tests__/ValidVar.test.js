import ValidVar from "../ValidVar";

describe("Testing ValidVar", () => {
  it('Passing "--h1" should resove to true', () => {
    expect(ValidVar("--h1")).toBeTruthy();
  });

  it('Passing "h1" should return "invalid variable name"', () => {
    expect(ValidVar("h1")).toBe("invalid variable name");
  });
});
