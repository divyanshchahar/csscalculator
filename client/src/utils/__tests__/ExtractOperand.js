import ExtractOperand from "../ExtractOperand";

describe("Testing ExtractOperand", () => {
  it('Passing 10 and "calc(var(--h1) * 0.5)" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) * 0.5)")).toEqual([
      "10",
      "0.5",
    ]);
  });

  it('Passing "10" and "calc(var(--h1) + 0.5)" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) + 0.5)")).toEqual([
      "10",
      "0.5",
    ]);
  });

  it('Passing "10" and "calc(var(--h1) - 0.5)" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) - 0.5)")).toEqual([
      "10",
      "0.5",
    ]);
  });

  it('Passing "10" and "calc(var(--h1) / 0.5)" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) / 0.5)")).toEqual([
      "10",
      "0.5",
    ]);
  });
});
