# Day 03 – Async/Await and Asynchronous Tests

## Overview

On this day, I focused on learning how to use `async/await` as a cleaner and more readable alternative to `.then()` and `.catch()` chains. The goal was to understand how to handle asynchronous operations with a syntax that feels closer to synchronous code, and how to properly manage errors using `try/catch`.

## What I learned

- How to use `async/await` to handle asynchronous operations
- How to use `try/catch` to handle errors in async functions
- How to fetch data from an external API using `async/await`
- How to parse JSON responses with `await response.json()`
- How to update the DOM dynamically based on API responses
- How to clear previous content before displaying new data
- How to display user-friendly error messages when a request fails
- How to style a clean card layout using Flexbox and `box-shadow`
- How to add hover animations with `transition` and `transform`

## Practice

### Exercise 01 – Random Quote Generator 💬

In this exercise, I built a random quote generator that fetches quotes from a public API using `async/await`.

The page includes:

- A title "Quote of the Day"
- A button to fetch a new random quote
- A display area for the quote text and its author
- An error message area for when the request fails

**How it works:**

- When the user clicks the button, an `async` function is triggered
- Inside the function, `await fetch()` makes a request to the DummyJSON Quotes API
- The response is parsed with `await response.json()`
- The quote and author are displayed by updating the `innerText` of each element
- If the request fails, the `catch` block clears the quote and shows an error message

**Layout and Design:**

- Warm, minimal aesthetic with a beige background (`#f5efe7`) and a white card
- Centered layout built with Flexbox
- Card styled with `border-radius`, `padding`, and `box-shadow` for a clean look
- Quote displayed in italic with a warm dark tone
- Author name styled in a muted brown (`#b89b84`) matching the button color
- Button with rounded corners and smooth hover animation

**Key technical details:**

- The `async` keyword is placed directly on the event listener callback
- `try/catch` replaces `.then()/.catch()`, making error handling more readable
- Previous content is cleared before each new fetch to avoid stale data on screen

## Key Takeaway

`async/await` makes asynchronous code much easier to read and reason about. Combined with `try/catch`, it provides a clean and intuitive way to handle both success and error states — especially when working with multiple sequential `await` calls that would otherwise require nested `.then()` chains.

---

## Live Page

### Exercise 01 – Random Quote Generator
👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-03-async-await-and-asynchronous-tests/random-quote-generator/