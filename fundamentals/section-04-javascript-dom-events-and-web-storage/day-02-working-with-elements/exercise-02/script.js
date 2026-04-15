let h1 = document.createElement("h1");
h1.innerText = "Travel Agency"

let main = document.createElement("main");
main.className = "main-content";

let body = document.querySelector("body");
body.appendChild(h1);
body.appendChild(main);

let section = document.createElement("section");
section.className = "center-content";

let section2 = document.createElement("section");
section2.className = "left-content";

let section3 = document.createElement("section");
section3.className = "right-content";

let h31 = document.createElement("h3");
let h32 = document.createElement("h3");
let h33 = document.createElement("h3");

let parentSection = document.querySelector(".main-content");
parentSection.appendChild(section);
parentSection.appendChild(section2);
parentSection.appendChild(section3);
parentSection.appendChild(h31);
parentSection.appendChild(h32);
parentSection.appendChild(h33);

let p = document.createElement("p");
p.innerText = "Our travel agency is dedicated to turning dreams into unforgettable experiences. We offer personalized itineraries, expert support, and the best options for national and international destinations. Whether you want to relax, explore new cultures, or enjoy unique adventures, we take care of every detail of your trip with safety, comfort, and quality.";

let parentP = document.querySelector(".center-content");
parentP.appendChild(p);

let image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";

let parentImage = document.querySelector(".left-content");
parentImage.appendChild(image);

let ul = document.createElement("ul");

let parentUl = document.querySelector(".right-content");
parentUl.appendChild(ul);

let numbers = [
    "one",
    "two",
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine", 
    "ten",
]

for (let i = 0; i < numbers.length; i++){
    let li = document.createElement("li");
    li.innerText = numbers[i];
    ul.appendChild(li);
}



