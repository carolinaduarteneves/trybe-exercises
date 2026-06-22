# Day 02 – JavaScript Asynchronous, Promises and Fetch
 
## Overview
 
On this day, I focused on learning how to work with asynchronous JavaScript, including Promises and the Fetch API. The goal was to understand how to handle operations that take time to complete — like API requests — and how to manage success and error states in a clean and readable way.
 
## What I learned
 
- How to create and use `Promises` with `resolve` and `reject`
- How to chain `.then()` and `.catch()` for handling asynchronous results
- How to use `fetch()` to make HTTP requests to external APIs
- How to parse JSON responses with `.json()`
- How to handle loading states and user feedback during async operations
- How to use `async/await` as an alternative to `.then()` chains
- How to use `setTimeout` to simulate asynchronous delays
- How to use environment variables with Vite (`import.meta.env`)
- How to display dynamic content by manipulating the DOM with JavaScript
- How to show user-friendly error messages with SweetAlert2
## Practice
 
During this lesson, I completed three exercises to practice asynchronous JavaScript, Promises, and Fetch.
 
---
 
### Exercise 01 – Async User Search
 
In this exercise, I built a user search interface that simulates an asynchronous operation using Promises and `setTimeout`.
 
The page includes:
 
- A form with an input field for the username
- A paragraph element that displays feedback messages to the user
**How it works:**
 
- When the form is submitted, a "Searching user..." message is displayed immediately
- A `Promise` is created with a 2-second delay using `setTimeout`
- If the input is empty or shorter than 3 characters, the Promise **rejects** with an error message
- If the input is valid, the Promise **resolves** with a success message
- `.then()` handles the success case and `.catch()` handles the error case
This exercise helped me understand the full lifecycle of a Promise: **pending → fulfilled or rejected**.
 
---
 
### Exercise 02 – Currency Exchange 💱
 
In this exercise, I built a currency exchange page that fetches real-time conversion rates from an external API.
 
The page includes:
 
- An input field to enter a currency code (e.g., USD, BRL, EUR)
- A button to trigger the search
- A dynamic grid of cards displaying all exchange rates relative to the searched currency
- User-friendly error alerts using SweetAlert2
**How it works:**
 
- On button click, a `fetch()` request is made to the ExchangeRate API
- The response is parsed with `.json()` and the conversion rates are extracted
- The app validates the input: empty fields and invalid currency codes show custom error alerts
- For valid currencies, the section becomes visible and all exchange rates are calculated and rendered as `<li>` cards
- Each card shows the currency name and its converted value formatted to 2 decimal places
- The `.catch()` block handles network or connection errors
**Key technical details:**
 
- The API key is stored securely using a Vite environment variable (`import.meta.env.VITE_API_KEY`)
- `Object.entries()` and `.map()` are used to transform the API data into a usable array
- The card list is cleared with `ul.innerHTML = ""` before each new search to avoid duplication
---
 
### Exercise 03 – Random Dog Viewer 🐶
 
In this exercise, I built a page that fetches and displays a random dog image from a public API.
 
The page includes:
 
- A button to fetch a new dog image
- A paragraph that shows loading feedback
- An image element that is hidden by default and revealed after the fetch
**How it works:**
 
- On button click, a loading message is displayed and a `setTimeout` of 2 seconds simulates a delay
- After the delay, `fetch()` makes a request to the Dog CEO API
- On success, the image `src` is updated with the returned URL and the image becomes visible
- On failure, an error message is displayed via `.catch()`
This exercise helped me combine `setTimeout` with `fetch()` and practice DOM manipulation alongside asynchronous operations.
 
---
 
## Key Takeaway
 
Asynchronous JavaScript is essential for building real-world web applications. Promises provide a clean and structured way to handle operations that take time, and the Fetch API makes it straightforward to communicate with external services. Understanding how to manage loading states, success responses, and errors gives users a much better experience.
 
---
 
## Live Page
 
### Exercise 01 – Async User Search
👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-02-javascript-asynchronous-promises-and-fetch/async-user-search/
 
### Exercise 02 – Currency Exchange
👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-02-javascript-asynchronous-promises-and-fetch/currency-exchange/
 
### Exercise 03 – Random Dog Viewer
👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-02-javascript-asynchronous-promises-and-fetch/random-dog-viewer/