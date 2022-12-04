import VarExists from "../VarExists";

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

describe("Testing VarExists", () => {
  it("Passing an existing variable should resolve to true", () => {
    expect(VarExists("--h1", temp)).toBeTruthy();
  });

  it("Passing an non-existing variable should return an error message", () => {
    expect(VarExists("--h9", temp)).toBe("refrence varaible does not exists");
  });
});
