# Day 02 – Classes, Objects, and Methods

## Overview
On this day, I practiced creating classes, objects, and methods in JavaScript using Object-Oriented Programming (OOP).

The goal was to understand how objects can encapsulate both data and behavior by creating a simple bank account system with methods to manage deposits, withdrawals, and account information.

## What I learned
- How to create classes using the `class` keyword
- How to define object properties
- How to initialize objects using a constructor
- How to create and use class methods
- How to update object properties using `this`
- How to instantiate objects with the `new` keyword
- How to model real-world scenarios using Object-Oriented Programming

## Practice

### BankAccount Class

Created a `BankAccount` class to simulate a simple bank account.

#### Properties
- `owner`
- `balance`

#### Methods

### `deposit(valueDeposited)`
- Adds the deposited amount to the current balance
- Displays a confirmation message
- Shows the updated balance

### `withdraw(valueWithdrawn)`
- Checks if the account has enough balance
- Deducts the requested amount when possible
- Displays the updated balance after the withdrawal
- Displays an error message when the balance is insufficient

### `showBalance()`
- Displays the account owner's name
- Displays the current account balance

#### Object Instance

Created a bank account for:

- **Owner:** Ana
- **Initial Balance:** $0

The following operations were performed:

- Deposit of **$100**
- Withdrawal of **$50**
- Display of the final account balance

## Key takeaway
Using classes and methods makes it possible to organize related data and behaviors into a single structure. This approach improves code readability, reusability, and maintainability while making it easier to represent real-world objects in software.