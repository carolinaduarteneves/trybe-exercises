const createItem = (name, quantity, unit, price) => {
  if (typeof name !== "string") {
    throw new Error("The item name must be a string");
  }

  if (price <= 0) {
    throw new Error("The item price must be greater than zero");
  }

  if (quantity === undefined) {
    quantity = 0;
  }

  return {
    name: name,
    quantity: quantity,
    unit: unit,
    price: price,
  };
};

module.exports = createItem;
