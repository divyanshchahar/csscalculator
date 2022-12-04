import ExtractOperator from "../ExtractOperator";

describe("Testing ExtractOperator", () => {
  it('Passing "calc(var(--h1) * 0.5)" should return *', () => {
    expect(ExtractOperator("calc(var(--h1) * 0.5)")).toBe("*");
  });

  it('Passing "calc(var(--h1) / 0.5)" should return /', () => {
    expect(ExtractOperator("calc(var(--h1) / 0.5)")).toBe("/");
  });

  it('Passing "calc(var(--h1) + 0.5)" should return +', () => {
    expect(ExtractOperator("calc(var(--h1) + 0.5)")).toBe("+");
  });

  it('Passing "calc(var(--h1) - 0.5)" should return -', () => {
    expect(ExtractOperator("calc(var(--h1) - 0.5)")).toBe("-");
  });
});
