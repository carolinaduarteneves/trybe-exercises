# Day 01 – Exception Flow

## Overview
On this day, I practiced exception handling in JavaScript using `try`, `catch`, and `throw`.
The goal was to validate user input, prevent invalid data from breaking the application, and create a simple product filtering system based on a maximum price entered by the user.

## What I learned
- How to use `try` and `catch` to handle runtime errors
- How to throw custom errors using `throw new Error()`

## Practice
Built a product filtering application that:
- Allows the user to enter a maximum price
- Validates the input before processing
- Filters only products that are in stock and within the selected price
- Calculates the total value of the filtered products
- Displays the available products and their total price
- Shows a custom error message when the input is invalid

## Key takeaway
Exception handling makes applications more reliable by preventing invalid input from causing unexpected behavior. Combining input validation with array methods like `filter()` and `reduce()` helps create cleaner, safer, and more maintainable JavaScript code.

## Live Page
You can view this exercise live here:

👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-05-intro-to-js-es6-and-unit-tests/day-01-exception-flow/exercise-01/