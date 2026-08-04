# Day 03 – Async/Await and Asynchronous Tests

## Overview

On this day, I focused on learning how to use `async/await` as a cleaner and more readable alternative to `.then()` and `.catch()` chains.

The goal was to understand how to perform asynchronous operations, consume external APIs, handle errors gracefully, and dynamically update web pages based on asynchronous responses.

## What I learned

- How to use `async/await` to handle asynchronous operations
- How to use `try/catch` to handle asynchronous errors
- How to fetch data from external APIs using `fetch()`
- How to parse JSON responses using `await response.json()`
- How to validate user input before making requests
- How to update the DOM dynamically after asynchronous operations
- How to display loading and error messages
- How to organize asynchronous code into reusable functions

---

## Practice

### Exercise 01 – Random Quote Generator 💬

In this exercise, I built a random quote generator that fetches quotes from a public API using `async/await`.

The page includes:

- A title "Quote of the Day"
- A button to generate a new quote
- A display area for the quote and its author
- An error message when the request fails

### How it works

- The user clicks the button.
- An asynchronous request is sent to the Quotes API.
- The response is converted into JSON.
- The quote and author are displayed dynamically.
- If an error occurs, a friendly error message is shown.

### Key technical details

- Used `async/await` instead of `.then()`
- Used `try/catch` for error handling
- Updated the DOM dynamically
- Cleared previous content before displaying new information

---

### Exercise 02 – US ZIP Code Finder 🇺🇸

In this exercise, I built an application that searches for information about United States ZIP Codes using the **Zippopotam.us API**.

The application allows users to search for a ZIP Code and displays location information retrieved from the API.

### Features

- ZIP Code input
- Search button
- Loading message while the request is in progress
- Error handling for invalid or nonexistent ZIP Codes
- Dynamic display of ZIP Code information

### How it works

- The user enters a ZIP Code and submits the form.
- The application validates the input.
- A request is sent to the Zippopotam.us API.
- While waiting, a loading message is displayed.
- If the request succeeds, the application displays:
  - ZIP Code
  - Country
  - City
  - State
  - State abbreviation
- If the ZIP Code is invalid or the request fails, an error message is shown.

### Key technical details

- Used `async/await` for asynchronous requests
- Used `fetch()` to consume the API
- Used `try/catch` to handle errors
- Used `preventDefault()` to prevent page reload
- Created helper functions to:
  - Display ZIP Code information
  - Display error messages
  - Clear previous search results
- Updated the DOM dynamically using `innerHTML` and `innerText`

---

## Key Takeaway

Using `async/await` together with `try/catch` makes asynchronous JavaScript code cleaner, easier to understand, and easier to maintain. Building applications that consume APIs also reinforced the importance of input validation, error handling, loading states, and dynamic DOM manipulation to create a better user experience.

---

## Live Pages

### Exercise 01 – Random Quote Generator

👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-03-async-await-and-asynchronous-tests/random-quote-generator/

### Exercise 02 – US ZIP Code Finder

👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-03-async-await-and-asynchronous-tests/us-zip-code-finder/