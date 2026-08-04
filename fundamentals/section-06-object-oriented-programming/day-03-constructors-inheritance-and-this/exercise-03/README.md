# Day 03 – Constructors, Inheritance, and `this`

## Overview
On this day, I learned how to extend classes using inheritance in JavaScript and how constructors and the `this` keyword work together in Object-Oriented Programming (OOP).

The goal was to understand how child classes inherit properties and methods from parent classes, customize inherited behavior, and create specialized objects while reusing existing code.

## What I learned
- How to create constructors to initialize object properties
- How inheritance works using the `extends` keyword
- How to call the parent constructor using `super()`
- How to override inherited methods
- How to use the `this` keyword to access object properties
- How to create specialized classes from existing ones
- How inheritance promotes code reuse and organization

## Practice

### Employee Class

Created an `Employee` class to represent a company employee.

#### Properties
- `name`
- `salary`

#### Methods

### `showEmployee()`
- Displays the employee's name
- Displays the employee's salary

---

### Manager Class

Created a `Manager` class that extends the `Employee` class.

#### Additional Property
- `sector`

#### Methods

### `showEmployee()`
- Overrides the inherited method
- Displays the manager's name
- Displays the salary with a bonus indication

### `showManagerRole()`
- Displays the manager's department

---

### Object Instances

Created two objects:

#### Manager
- **Name:** Ana
- **Salary:** $100
- **Department:** Technology

Methods executed:
- `showEmployee()`
- `showManagerRole()`

#### Employee
- **Name:** Maddy
- **Salary:** $50

Method executed:
- `showEmployee()`

## Key takeaway
Inheritance allows classes to reuse existing functionality while adding or customizing features. Using constructors, `super()`, method overriding, and the `this` keyword makes code more organized, reusable, and easier to maintain in larger applications.