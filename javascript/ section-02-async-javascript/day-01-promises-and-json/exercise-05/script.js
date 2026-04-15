const products =[
{id: 1, name: "Shirt", price: 20.00},
{id: 2, name: "Pants", price: 15.00},
{id: 3, name: "Sneaker", price: 100.00},
];

const productsJson = JSON.stringify(products);
console.log(productsJson);
console.log(products);

const productsObj = JSON.parse(productsJson);
console.log(productsObj);