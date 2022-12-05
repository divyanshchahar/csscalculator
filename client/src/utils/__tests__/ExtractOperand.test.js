import ExtractOperand from "../ExtractOperand";

describe("Testing ExtractOperand", () => {
  // decimal after operand
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

  //decimal before operand
  it('Passing "10" and "calc(0.5 * var(--h1))" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(0.5 * var(--h1))")).toEqual([
      "0.5",
      "10",
    ]);
  });

  it('Passing "10" and "calc(0.5 + var(--h1))" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(0.5 + var(--h1))")).toEqual([
      "0.5",
      "10",
    ]);
  });

  it('Passing "10" and "calc(0.5 - var(--h1))" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(0.5 - var(--h1))")).toEqual([
      "0.5",
      "10",
    ]);
  });

  it('Passing "10" and "calc(0.5 / var(--h1))" should return ["10", "0.5"]', () => {
    expect(ExtractOperand("10", "calc(0.5 / var(--h1))")).toEqual([
      "0.5",
      "10",
    ]);
  });

  // // integer before operand
  it('Passing "10" and "calc(5 * var(--h1))" should return ["5", "10"]', () => {
    expect(ExtractOperand("10", "calc(5 * var(--h1))")).toEqual(["5", "10"]);
  });

  it('Passing "10" and "calc(5 + var(--h1))" should return ["5", "10"]', () => {
    expect(ExtractOperand("10", "calc(5 + var(--h1))")).toEqual(["5", "10"]);
  });

  it('Passing "10" and "calc(5 - var(--h1))" should return ["5", "10"]', () => {
    expect(ExtractOperand("10", "calc(5 - var(--h1))")).toEqual(["5", "10"]);
  });

  it('Passing "10" and "calc(5 / var(--h1))" should return ["5", "10"]', () => {
    expect(ExtractOperand("10", "calc(5 / var(--h1))")).toEqual(["5", "10"]);
  });

  // integer after operand
  it('Passing "10" and "calc(var(--h1) * 5)" should return ["10", "15"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) * 5)")).toEqual(["10", "5"]);
  });

  it('Passing "10" and "calc(var(--h1) + 5)" should return ["10", "15"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) + 5)")).toEqual(["10", "5"]);
  });

  it('Passing "10" and "calc(var(--h1) - 5)" should return ["10", "15"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) - 5)")).toEqual(["10", "5"]);
  });

  it('Passing "10" and "calc(var(--h1) / 5)" should return ["10", "15"]', () => {
    expect(ExtractOperand("10", "calc(var(--h1) / 5)")).toEqual(["10", "5"]);
  });
});
