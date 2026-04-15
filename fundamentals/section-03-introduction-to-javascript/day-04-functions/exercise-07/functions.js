const listOfProducts = ["Apple", "Water"]


function addProducts(listOfProducts, newProducts){
for (let i = 0; i < newProducts.length; i++){
    if (typeof newProducts[i] !== "string"){
        return "All products need to be strings."
    }
    listOfProducts.push(newProducts[i]);
}
return listOfProducts;
}

console.log(addProducts(listOfProducts, ["Rice", "Lemon"]));