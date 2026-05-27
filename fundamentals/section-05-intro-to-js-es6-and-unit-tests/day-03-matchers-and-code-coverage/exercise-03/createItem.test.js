const createItem = require("./createItem");

describe("the createItem function", () => {

  it("creates a valid item", () => {
    expect(createItem("banana", 20, "kg", 1.99)).toEqual({
      name: "banana",
      quantity: 20,
      unit: "kg",
      price: 1.99,
    });
  });

  it("uses zero as the default quantity", () => {
    expect(createItem("banana", undefined, "kg", 1.99)).toEqual({
      name: "banana",
      quantity: 0,
      unit: "kg",
      price: 1.99,
    });
  });

  it("throws an error when no parameters are provided", () => {
    expect(() => createItem()).toThrow(Error);
  });

  it("throws an error if the item name is not a string", () => {
    expect(() => createItem(1.99, 20, "kg", "banana")).toThrow(Error);
  });

  it("throws an error if the price is negative", () => {
    expect(() => createItem("banana", 20, "kg", -0.01)).toThrow(Error);
  });

  it("throws an error if the price is zero", () => {
    expect(() => createItem("banana", 20, "kg", 0.0)).toThrow(Error);
  });

});