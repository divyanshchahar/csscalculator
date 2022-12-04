import GenerateGoodObject from "../GenerateGoodObject";

const itemID = "a1";
const testVarName = "test var";
const testVarValue = "test value";
const inputString = "test string";

const sentArr = [
  {
    id: "a1",
    varName: "varName",
    varValue: "varValue",
    hasError: false,
    errorMessage: null,
    userInput: "userInput",
  },
  {
    id: "a2",
    varName: null,
    varValue: null,
    hasError: true,
    errorMessage: "",
    userInput: "",
  },
];

const recievedArr = [
  {
    id: "a1",
    varName: testVarName,
    varValue: testVarValue,
    hasError: false,
    errorMessage: null,
    userInput: inputString,
  },
  {
    id: "a2",
    varName: null,
    varValue: null,
    hasError: true,
    errorMessage: "",
    userInput: "",
  },
];

test("Test GenerateGoodObject", () => {
  expect(
    GenerateGoodObject(itemID, inputString, testVarName, testVarValue, sentArr)
  ).toEqual(recievedArr);
});
