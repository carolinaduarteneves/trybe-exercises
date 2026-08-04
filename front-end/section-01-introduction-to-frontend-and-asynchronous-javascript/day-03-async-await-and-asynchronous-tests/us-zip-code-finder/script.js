const zipCodeInput = document.getElementById("zip-code");
const searchForm = document.querySelector(".search-form");

const resultContainer = document.getElementById("result-container");
const errorMessage = document.getElementById("error-message");
const loadingMessage = document.getElementById("loading-message");

const fetchZipCodeData = async (event) => {
  event.preventDefault();
  try {
    clearResults();
    const zipCode = zipCodeInput.value.trim();

    if (zipCode === "") {
      displayError("Please enter a ZIP Code.");
      return;
    }

    loadingMessage.innerText = "Searching ZIP Code...";

    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);

    loadingMessage.innerText = "";

    
    if (!response.ok) {
      displayError("ZIP Code not found.");
      return;
    }

    const data = await response.json();

    displayZipCodeData(data);
  } catch (error) {
    displayError("Error searching ZIP Code.");
  }
};

const displayZipCodeData = (data) => {
  resultContainer.innerHTML = `
    <h2>ZIP Code: ${data["post code"]}</h2>
    <p>Country: ${data.country}</p>
    <p>City: ${data.places[0]["place name"]}</p>
    <p>State: ${data.places[0].state}</p>
    <p>State abbreviation: ${data.places[0]["state abbreviation"]}</p>
  `;
};

const displayError = (message) => {
  errorMessage.innerText = message;
};

const clearResults = () => {
  resultContainer.innerHTML = "";
  errorMessage.innerHTML = "";
  loadingMessage.innerHTML = "";
};

searchForm.addEventListener("submit", fetchZipCodeData);
