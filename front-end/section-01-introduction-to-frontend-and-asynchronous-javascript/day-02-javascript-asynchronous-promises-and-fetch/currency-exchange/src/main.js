import Swal from "sweetalert2";
const apiKey = import.meta.env.VITE_API_KEY;

const input = document.getElementById("currency");
const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const section = document.querySelector("section");

const fetchCurrency = () => {
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data.conversion_rates);
      const conversionRates = data.conversion_rates;
      const currencyName = input.value.toUpperCase();
      const convertedCurrencies = Object.entries(conversionRates).map(
        ([name, value]) => {
          return {
            name: name,
            value: value,
          };
        },
      );

      if (currencyName.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Empty field",

          text: "You need to enter a currency!",
          background: "#1e1e1e",
          color: "#ffffff",
          confirmButtonColor: "#7ee889",
        });
        return;
      }

      if (currencies.includes(currencyName)) {
        section.style.display = "block";
        h2.innerHTML = `Exchange rates based on 1 ${currencyName}`;
        ul.innerHTML = "";
        for (let i = 0; i < convertedCurrencies.length; i++) {
          const result =
            Number(convertedCurrencies[i].value) /
            Number(conversionRates[currencyName]);
          const card = document.createElement("li");
          card.classList.add("currency-card");
          card.innerHTML = `
  <span class="currency-name">${convertedCurrencies[i].name}:</span>
  <span class="currency-value">${result.toFixed(2)}</span>
`;
          ul.appendChild(card);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Currency not found",
          text: "Please enter a valid currency code, like USD, BRL or EUR.",
          background: "#1e1e1e",
          color: "#ffffff",
          confirmButtonColor: "#7ee889",
        });
      }
    })

    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Connection error",
        text: "Check your internet connection and try again.",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonColor: "#7ee889",
      });
    });
};

btn.addEventListener("click", fetchCurrency);
