const products = [
  { name: "Shirt", price: 20, inStock: true },
  { name: "Jeans", price: 50, inStock: false },
  { name: "Sneakers", price: 80, inStock: true },
  { name: "Hat", price: 15, inStock: true },
  { name: "Jacket", price: 120, inStock: true },
];

const button = document.getElementById("button");

const total = document.getElementById("total");
const errorMessage = document.getElementById("error");

button.addEventListener("click", () => {
  const price = document.getElementById("price").value;
  processProducts(price);
});

const processProducts = (price) => {
  try {
    total.innerText = "";
    errorMessage.innerText = "";
    validateNumber(price);
    const filteredProducts = filterProducts(price);
    const totalPrice = calculateTotal(filteredProducts);

    const productMessages = filteredProducts.map((product) => {
      return `${product.name} costs $${product.price}`;
    });

    total.innerText = `The products available within the maximum price are:
${productMessages.join("\n")}

Total: $${totalPrice}`;
  } catch (error) {
    errorMessage.innerText = error.message;
  }
};

const validateNumber = (price) => {
  if (Number.isNaN(Number(price)) || Number(price) < 0) {
    throw new Error("Please enter a valid price.");
  }
};

const filterProducts = (price) => {
  return products.filter((item) => {
    return item.inStock && item.price <= Number(price);
  });
};

const calculateTotal = (filteredProducts) => {
  return filteredProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
};
