# Day 04 – Web Storage

## Overview
On this day, I focused on learning how to use **Web Storage** to store data in the browser.  
The goal was to understand how to save user preferences and application data using `localStorage`, allowing information to persist even after the page is refreshed.

## What I learned
- The difference between `localStorage` and `sessionStorage`  
- How to store data using `localStorage.setItem()`  
- How to retrieve data using `localStorage.getItem()`  
- How to remove data with `localStorage.removeItem()`  
- How to store complex data (arrays) using `JSON.stringify()`  
- How to retrieve arrays using `JSON.parse()`  
- How to use Web Storage to persist user preferences  
- How to integrate Web Storage with DOM manipulation  

## Practice
During this lesson, I completed two exercises to practice Web Storage and DOM interaction.

### Exercise 06 – Page Customization with Web Storage
In this exercise, I built a page where users can customize the visual appearance of the content.

The user can change:

- Background color  
- Text color  
- Font size  
- Line height  
- Font family  

Each selection is:
- Applied immediately to the page  
- Saved in `localStorage`  

This allows the user’s preferences to persist even after refreshing the browser.

### Exercise 07 – Clothing Store Cart
For this exercise, I built a simple **clothing store interface** with a shopping cart system.

The user can:
- Add items (T-shirt, Jeans, Jacket) to the cart  
- View the items dynamically in a list  
- Clear the cart  

The cart data is stored in `localStorage` using an array, allowing the application to simulate a real shopping experience.

## Key takeaway
Web Storage allows developers to store data directly in the browser, making applications more dynamic and user-friendly.  
By combining `localStorage` with DOM manipulation, it is possible to persist user preferences and application state without relying on a backend.

## Live Page

### Exercise 06 – Page Customization
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-04-web-storage/exercise-06/

### Exercise 07 – Clothing Store Cart
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-04-web-storage/exercise-07/