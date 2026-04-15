const destinationInput = document.getElementById("destination-input");
const addButton = document.getElementById("add-button");
const destinationList = document.getElementById("destination-list");

let list = [];

const addDestination = () => {

    let destinationValue = destinationInput.value;
if (destinationValue === ""){
    alert("Please enter a destination!");
    return;
}
list.push(destinationValue);
let newElement = document.createElement("li");
newElement.innerText = destinationValue;
newElement.addEventListener("click", () => {
    destinationList.removeChild(newElement)
})
destinationList.appendChild(newElement);
destinationValue = "";
}
addButton.addEventListener("click", addDestination);