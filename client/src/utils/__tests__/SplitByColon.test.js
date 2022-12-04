import SplitByColon from "../SplitByColon";

describe("Testing SplitByColon", () => {
  it('passing "--h2: calc(var(--h1) * 0.5);" should return ["--h1", "calc(var(--h1) * 0.5)"]', () => {
    expect(SplitByColon("--h2: calc(var(--h1) * 0.5);")).toEqual([
      "--h2",
      "calc(var(--h1) * 0.5)",
    ]);
  });

  it('passing "--h5: 10vh;", should return ["h5", "10vh"]', () => {
    expect(SplitByColon("--h5: 10vh;")).toEqual(["--h5", "10vh"]);
  });
});
