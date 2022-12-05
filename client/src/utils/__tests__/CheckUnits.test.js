import CheckUnits from "../CheckUnits";

describe("Testing CheckUnits", () => {
  it("Passing 10vh should resolve to be true", () => {
    expect(CheckUnits("10vh")).toBeTruthy();
  });

  it("Passing 10vw should resolve to be true", () => {
    expect(CheckUnits("10vw")).toBeTruthy();
  });

  it("Passing 10cm should resolve to be true", () => {
    expect(CheckUnits("10cm")).toBeTruthy();
  });

  it("Passing 10mm should resolve to be true", () => {
    expect(CheckUnits("10mm")).toBeTruthy();
  });

  it("Passing 10in should resolve to be true", () => {
    expect(CheckUnits("10in")).toBeTruthy();
  });

  it("Passing 10px should resolve to be true", () => {
    expect(CheckUnits("10px")).toBeTruthy();
  });

  it("Passing 10pt should resolve to be true", () => {
    expect(CheckUnits("10pt")).toBeTruthy();
  });

  it("Passing 10pc should resolve to be true", () => {
    expect(CheckUnits("10pc")).toBeTruthy();
  });

  it("Passing 10em should resolve to be true", () => {
    expect(CheckUnits("10em")).toBeTruthy();
  });

  it("Passing 10ex should resolve to be true", () => {
    expect(CheckUnits("10ex")).toBeTruthy();
  });

  it("Passing 10ch should resolve to be true", () => {
    expect(CheckUnits("10ch")).toBeTruthy();
  });

  it("Passing 10rem should resolve to be true", () => {
    expect(CheckUnits("10rem")).toBeTruthy();
  });

  it("Passing 10vmin should resolve to be true", () => {
    expect(CheckUnits("10vvmin")).toBeTruthy();
  });

  it("Passing 10vmax should resolve to be true", () => {
    expect(CheckUnits("10vmax")).toBeTruthy();
  });

  it("Passing 10% should resolve to be true", () => {
    expect(CheckUnits("10%")).toBeTruthy();
  });

  it("Passing 0 should resolve to be true", () => {
    expect(CheckUnits("0")).toBeTruthy();
  });

  it("Passing 2xyz should return error message", () => {
    expect(CheckUnits("2xyz")).toBe("invalid unit");
  });
});
