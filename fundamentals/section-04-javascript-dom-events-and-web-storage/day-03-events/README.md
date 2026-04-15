# Day 03 – Events

## Overview
On this day, I focused on learning how to work with **JavaScript events** to create interactive web pages.  
The goal was to understand how user actions (such as clicks, typing, and mouse movements) can trigger dynamic changes in the DOM.

## What I learned
- How to use `addEventListener()` to handle events  
- How to respond to user actions like `click`, `input`, `mouseover`, and `mouseleave`  
- How to manipulate classes using `classList`  
- How to dynamically update content using `innerText`  
- How to create interactive elements using event-driven programming  
- How to manage game logic with events  
- How to dynamically create and remove elements from the DOM  

## Practice

### Exercise 03 – Favorite Animals Interaction
In this exercise, I created an interactive page where the user can select and modify cards.

The page allows the user to:
- Select one card at a time  
- Change the text of the selected card using an input field  
- Change the title color when hovering over it  

This was done using:
- `click` events to select cards  
- `input` events to update text dynamically  
- `mouseover` and `mouseleave` events to change styles  

---

### Exercise 04 – Travel List
In this exercise, I built a dynamic **travel list application**.

The user can:
- Add new destinations to a list  
- Remove items by clicking on them  

The application includes:
- Input validation (prevents empty values)  
- Dynamic creation of `<li>` elements  
- Event listeners attached to newly created elements  

This exercise helped reinforce how to:
- Work with user input  
- Create and remove elements dynamically  
- Manage simple application state  

---

### Exercise 05 – Tic-Tac-Toe Game
In this exercise, I built a simple **Tic-Tac-Toe game** using JavaScript events.

The game includes:
- A 3x3 grid of clickable cells  
- Alternating turns between players (X and O)  
- Automatic win detection based on predefined combinations  
- A restart button to reset the game  

The logic was implemented using:
- `click` events for each cell  
- Conditional logic to switch players  
- Arrays to store winning combinations  
- Functions to check the game state  

## Key takeaway
Events are essential for creating interactive web applications.  
By combining event listeners with DOM manipulation, developers can build dynamic interfaces that respond to user actions in real time.

## Live Page

### Exercise 03 – Favorite Animals Interaction
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-03-events/exercise-03/

### Exercise 04 – Travel List
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-03-events/exercise-04/

### Exercise 05 – Tic-Tac-Toe Game
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-03-events/exercise-05/