const hydrate = (drink) => {
  const quantity = drink.match(/\d/g);

  let total = quantity.reduce((acc, number) => {
      return acc + Number(number);
    },
    0,
  );

  if (total === 1) {
    return "1 glass of water";
  }

  return `${total} glasses of water`;
};

module.exports = hydrate;