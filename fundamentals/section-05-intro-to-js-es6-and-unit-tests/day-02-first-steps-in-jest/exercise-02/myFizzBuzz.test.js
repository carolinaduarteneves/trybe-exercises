const myFizzBuzz = require("./myFizzBuzz");

describe("Requirement 1", () => {
  it("The function receives a number divisible by 3 and 5 and returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
});

describe("Requirement 2", () => {
  it("The function receives a number divisible only by 3 and returns 'fizz'", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
});

describe("Requirement 3", () => {
  it("The function receives a number divisible only by 5 and returns 'buzz'", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
});

describe("Requirement 4", () => {
  it("The function receives a number that is not divisible by either 3 or 5 and returns the number itself", () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
});

describe("Requirement 5", () => {
  it("The function receives an argument that is not a number and returns false", () => {
    expect(myFizzBuzz("a")).toBeFalsy();
  });
});
