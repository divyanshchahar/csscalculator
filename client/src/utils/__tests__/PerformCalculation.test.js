import PerformCalculation from "../PerformCalculation";

describe("Testing PerformCalculation", () => {
  it('Result of multiplying "2" and "5" should be 10', () => {
    expect(PerformCalculation(["2", "5"], "*")).toBe(10);
  });

  it('Result of adding "2" and "5" should be 7', () => {
    expect(PerformCalculation(["2", "5"], "+")).toBe(7);
  });

  it('Result of dividing "8" by "2" should be 7', () => {
    expect(PerformCalculation(["8", "2"], "/")).toBe(4);
  });

  it('Result of Subtracting "2" and "5" should be 3', () => {
    expect(PerformCalculation(["5", "2"], "-")).toBe(3);
  });
});
