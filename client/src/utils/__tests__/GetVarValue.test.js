import GetVarValue from "../GetVarValue";

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

describe("Testing GetVarValue", () => {
  it("Passing --h3 and `temp`  should return 10vh", () => {
    expect(GetVarValue("--h3", temp)).toBe("10vh");
  });
});
