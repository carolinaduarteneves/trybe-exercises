const animalList = ["Dog 🐶", "Cat 🐱", "Elephant 🐘", "Lion 🦁"];

const content = document.getElementById("content");
function createSection(title, dataF) {
    const section = document.createElement("div");
    section.innerHTML = "<h2>" + title + "</h2>" + dataF;
    content.appendChild(section);
}

var data;
var i;

data = "";
i = 0;
while (i < 4) {

    data += "<p>" + animalList[i] + "</p>";
    i++;
}

createSection("While Loop", data);




data = "";
i = 0;
while (i < animalList.length) {

    data += "<p>" + animalList[i] + "</p>";
    i++;
}

createSection("Improving the While Loop", data);



data = "";
i = 0;
do {
    data += "<p>" + animalList[i] + "</p>";
    i++;
}
while (i < animalList.length)

createSection("Do While Loop", data);

data = "";
for (i = 0; i < animalList.length; i++) {
    data += "<p>" + animalList[i] + "</p>";
}
createSection("Loop For", data);


data = "";
for (let animal of animalList) {
    data += "<p>" + animal + "</p>";
}

createSection("Loop For Of", data);

let animal1 = { animalClass: "Mammal", diet: "Carnivore", habitat: "Domestic" };
let animal2 = { animalClass: "Mammal", diet: "Carnivore", habitat: "Domestic" };

let animals2 = [];
animals2.push(animal1);
animals2.push(animal2);

data = "";
for (let animal of animals2) {
    let propriedades = "";
    for (let prop in animal){
        propriedades += animal[prop] + " | ";
    }


data += "<p>" + propriedades + "</p>";
}

createSection("Loop For In", data);

data = "";
animalList.forEach((animal) => {
    data += "<p>" + animal + "</p>";
})
createSection("Loop For Each", data);