const addBtnTShirt = document.querySelectorAll(".add-btn")[0];
const addBtnJeans = document.querySelectorAll(".add-btn")[1];
const addBtnJacket = document.querySelectorAll(".add-btn")[2];
const clearCart = document.getElementById("clear-cart");

let items = [];

addBtnTShirt.addEventListener("click", (event) => {
  let TShirt = event.target.innerHTML;
  items.push(TShirt);
  localStorage.setItem("products", JSON.stringify(items));
  createLi()
});

addBtnJeans.addEventListener("click", (event) => {
  let Jeans = event.target.innerHTML;
  items.push(Jeans);
  localStorage.setItem("products", JSON.stringify(items));
  createLi()
});

addBtnJacket.addEventListener("click", (event) => {
  let Jacket = event.target.innerHTML;
  items.push(Jacket);
  localStorage.setItem("products", JSON.stringify(items));
  createLi()
});

clearCart.addEventListener("click", () => {
  items = [];
 localStorage.removeItem("products");
createLi();
});

const createLi = () => {

  let ul = document.getElementById("cart-list");
  ul.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.innerText = items[i];
    
    ul.appendChild(li);
  }
};

