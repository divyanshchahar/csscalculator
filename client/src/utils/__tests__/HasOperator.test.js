import HasOperator from "../HasOperator";

describe("Testing HasOperator", () => {
  it('Passing "calc(var(--h2) * 0.5)" should resolve to true', () => {
    expect(HasOperator("calc(var(--h2) * 0.5)")).toBeTruthy();
  });

  it('Passing "calc(var(--h2)  0.5)" should return an error message', () => {
    expect(HasOperator("calc(var(--h2)  0.5)")).toBe(
      "no binary operator present in the string"
    );
  });
});
