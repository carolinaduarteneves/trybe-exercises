const fetchButtonEle = document.querySelector("button");
const messageEle = document.querySelector("p");
const dogImageEle = document.querySelector("img");

fetchButtonEle.addEventListener("click", () => {
  messageEle.innerText = "Loading dog image...";
  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        messageEle.innerText = `Dog loaded successfully!`;
        dogImageEle.src = data.message;
        dogImageEle.hidden = false;
      })
      .catch(() => {
        messageEle.innerText = `Failed to load dog image.`;
      });
  }, 2000);
});
