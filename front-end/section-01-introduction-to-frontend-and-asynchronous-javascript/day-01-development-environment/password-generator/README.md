# Day 01 – Development Environment

## Overview

On this day, I focused on setting up the development environment and learning how to work with modern JavaScript tooling. The goal was to understand how to use a module bundler, import external libraries via npm, and build a functional application from scratch using Vite.

## What I learned

- How to set up a project using **Vite** as a development environment
- How to install and import external packages with **npm**
- How to use **ES Modules** (`import/export`) in the browser
- How to import and apply a **CSS file** directly in JavaScript
- How to manipulate the DOM to display dynamic content
- How to use the `nanoid` library to generate unique random strings
- How to add interactivity with `addEventListener`
- How to style a page using Flexbox for centering and layout
- How to use CSS `transition` and `transform` for hover animations

## Practice

### Exercise 01 – Secure Password Generator 🔒

In this exercise, I built a secure password generator using the `nanoid` library.

The page includes:

- A title introducing the tool
- A button to generate a new password
- A display area that shows the generated password

**How it works:**

- When the user clicks the button, the `nanoid()` function generates a cryptographically strong random string
- The generated password is displayed on the screen by updating the `innerText` of the `h2` element
- Each click generates a completely new password

**Layout and Design:**

- Dark, semi-transparent background creating a secure and modern feel
- Centered layout built with Flexbox (`flex-direction: column`, `justify-content: center`, `align-items: center`)
- Button with smooth hover animation using `transform: scale(1.1)` and `box-shadow`
- Password display area styled with a rounded dark background for readability

**Key technical details:**

- The `nanoid` package is installed via npm and imported as an ES Module
- CSS is imported directly into the JavaScript entry point (`import "./style.css"`)
- The project runs on a local dev server powered by Vite

## Key Takeaway

Setting up a proper development environment is the foundation of modern front-end development. Tools like Vite make it easy to work with ES Modules and npm packages, allowing developers to use powerful libraries like `nanoid` with just a single import — no configuration needed.

---

## Live Page

### Exercise 01 – Secure Password Generator
👉 https://carolinaduarteneves.github.io/trybe-exercises/front-end/section-01-introduction-to-frontend-and-asynchronous-javascript/day-01-development-environment/password-generator/