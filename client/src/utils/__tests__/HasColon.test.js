import HasColon from "../HasColon";

describe("Testing HasColon", () => {
  it('Passing "--h1: 10vh;" should resolve to true', () => {
    expect(HasColon("--h1: 10vh;")).toBeTruthy();
  });

  it('Passing "--h1: 10vh" should return error message', () => {
    expect(HasColon("--h1: 10vh")).toBe("input should contain exactly one ;");
  });
});
