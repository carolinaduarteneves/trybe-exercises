const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const thirdCard = document.getElementById("third-card");

function selectCard(event){
let cardSelected = document.querySelector(".selected");

if(cardSelected){
  cardSelected.classList.remove("selected");
}


event.target.classList.add("selected");
}

firstCard.addEventListener("click", selectCard);
secondCard.addEventListener("click", selectCard);
thirdCard.addEventListener("click", selectCard);

let input = document.getElementById("text-input");

function addInput (){
  let selected = document.querySelector(".selected");
  selected.innerText = input.value;
}

input.addEventListener("input", addInput);

let title = document.getElementById("page-title");

function changeColorOfTitle(){
  title.style.color = "violet";
}

title.addEventListener("mouseover", changeColorOfTitle);

function returnColor(){
title.style.color = "white";
}
title.addEventListener("mouseleave", returnColor);