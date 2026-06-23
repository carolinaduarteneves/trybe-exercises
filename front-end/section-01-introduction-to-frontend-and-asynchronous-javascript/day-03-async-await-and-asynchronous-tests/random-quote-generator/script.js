const getQuoteButton = document.getElementById("get-quote");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const errorText = document.getElementById("error");
const API_URL = "https://dummyjson.com/quotes/random";

getQuoteButton.addEventListener("click", async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    quoteText.innerText = data.quote;
    authorText.innerText = data.author;
    errorText.innerText = "";
  } catch (error) {
    quoteText.innerText = "";
    authorText.innerText = "";
    errorText.innerText = `Error getting quote: ${error.message}`;
  }
});
