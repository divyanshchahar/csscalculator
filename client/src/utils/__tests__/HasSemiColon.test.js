import HasSemiColon from "../HasSemiColon";

describe("Testing HasSemiColon", () => {
  it('Passing "--h1: 10vh;" should resolve to be true', () => {
    expect(HasSemiColon("--h1: 10vh;")).toBeTruthy();
  });

  it('Passing "--h1: 10vh" should return error message', () => {
    expect(HasSemiColon("--h1 10vh;")).toBe(
      "input shouold contain exactly one :"
    );
  });
});
