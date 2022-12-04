import UniqueVar from "../UniqueVar";

const temp = [
  {
    id: "a1",
    varName: "--h1",
    varValue: "10vh",
    hasError: false,
    errorMessage: null,
    userInput: "--h1: 10vh;",
  },
  {
    id: "a2",
    varName: "--h2",
    varValue: "20vh",
    hasError: false,
    errorMessage: null,
    userInput: "--h1: 20vh;",
  },
  {
    id: "a3",
    varName: "--h3",
    varValue: "10vh",
    hasError: false,
    errorMessage: null,
    userInput: "--h3: calc(var(--h2) * 0.5);",
  },
  {
    id: "a4",
    varName: null,
    varValue: null,
    hasError: true,
    errorMessage: "should contaiin exactly one :",
    userInput: "abcd",
  },
];

describe("Testing UniqueVar.js", () => {
  it("Should resolve to true when unique variable name is passed is passed", () => {
    expect(UniqueVar("--h9", temp)).toBeTruthy();
  });

  it("Should return error variable name is not unique", () => {
    expect(UniqueVar("--h1", temp)).toBe("variable name should be unique");
  });
});
