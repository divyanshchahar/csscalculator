import ExtractVar from "../ExtractVar";

describe("Testing ExtractVar", () => {
  it('passing "calc(var(--h1) * 0.5)"', () => {
    expect(ExtractVar("calc(var(--h1) * 0.5)")).toBe("--h1");
  });
});
