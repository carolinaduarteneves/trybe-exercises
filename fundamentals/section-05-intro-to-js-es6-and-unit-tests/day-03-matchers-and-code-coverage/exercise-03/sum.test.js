const sum = require("./sum.js");

describe("Test cases for the `sum` function", () => {
  it('Tests if receiving "4" and "5" as parameters returns "9" as the result', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Tests if receiving "0" in both parameters returns "0" as the result', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Tests if an error is thrown when a string is passed as a parameter", () => {
    expect(() => sum("1", 1)).toThrow(Error);
  });

  it('Tests if the error message is "parameters must be numbers" when calling sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrow("Parameters must be numbers");
  });
});
