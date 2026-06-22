const input = document.getElementById("user-name");
const form = document.querySelector("form");
const p = document.querySelector("p");

const searchUser = () => {
  const userName = input.value;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName.trim() === "" || userName.length < 3) {
        reject(new Error("Please enter a valid user name."));
      } else {
        resolve(`User found: ${userName}`);
      }
    }, 2000);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  p.innerText = "Searching user...";

  searchUser()
    .then((response) => {
      p.innerText = response;
    })
    .catch((error) => {
      p.innerText = error.message;
    });
});
