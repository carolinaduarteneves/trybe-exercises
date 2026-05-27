const removeItem = require("./removeItem");

describe("Requirement 1", () => {
  it("The function receives ([1, 2, 3, 4], 3) and returns [1, 2, 4]", () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3));
  });
});

describe("Requirement 2", () => {
  it("The function receives ([1, 2, 3, 4], 3) and does not return the array [1, 2, 3, 4]", () => {
    expect([1, 2, 3, 4]).not.toEqual(removeItem([1, 2, 3, 4], 3));
  });
});

describe("Requirement 3", () => {
  it("The function receives ([1, 2, 3, 4], 5) and returns [1, 2, 3, 4]", () => {
    expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5));
  });
});
 