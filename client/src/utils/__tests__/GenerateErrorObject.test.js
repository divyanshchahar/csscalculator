import GenerateErrorObject from "../GenerateErrorObject";

const itemId = "a2";
const inputString = "userInputString";
const errMesssage = "test";

const sentObj = [
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
    varName: "--h1",
    varValue: "10vh",
    hasError: false,
    errorMessage: null,
    userInput: "--h1: 10vh",
  },
];

const recievedObj = [
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
    varName: null,
    varValue: null,
    hasError: true,
    errorMessage: errMesssage,
    userInput: inputString,
  },
];

test("Testing GenerateErrorObject", () => {
  expect(
    GenerateErrorObject(itemId, inputString, errMesssage, sentObj)
  ).toEqual(recievedObj);
});
