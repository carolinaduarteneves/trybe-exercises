# Day 03 – Matchers and Code Coverage

## Overview
On this day, I explored more advanced Jest matchers and learned the importance of code coverage when testing JavaScript applications.

The goal was to improve the quality of automated tests by validating object properties, arrays, exceptions, return values, and different execution paths, ensuring that the code is thoroughly tested.

## What I learned
- How to use advanced Jest matchers
- How to test object properties with `toHaveProperty()`
- How to compare objects and arrays with `toEqual()`
- How to verify strings using `toContain()`
- How to test exceptions with `toThrow()`
- How to validate default parameter values
- How to test error messages
- How to improve test quality using code coverage

## Practice

### 1. Sum

Created tests for a function that adds two numbers.

#### Tests
- Verified the correct sum of two positive numbers
- Verified the sum of zero values
- Verified that an error is thrown when non-numeric values are provided
- Verified the correct error message

---

### 2. Print Message

Created tests for a function that prints a welcome message using an object.

#### Tests
- Verified that the object contains the expected `character` property
- Verified the returned welcome message
- Verified that the returned string contains the character's name
- Verified that an exception is thrown when no object is provided

---

### 3. Search Employee

Created tests for a function that searches employee information by ID.

#### Tests
- Verified that the function exists
- Verified that the correct first name is returned
- Verified that the correct last name is returned
- Verified that the employee's list of specialities is returned
- Verified that an error is thrown for an invalid employee ID
- Verified that an error is thrown when requesting unavailable information
- Verified the correct error message for unavailable information

---

### 4. Create Item

Created tests for a function that generates an item object.

#### Tests
- Verified that a valid object is created
- Verified that the default quantity is zero when no quantity is provided
- Verified that an error is thrown when no parameters are provided
- Verified that an error is thrown when the item name is not a string
- Verified that an error is thrown when the price is negative
- Verified that an error is thrown when the price is zero

## Key takeaway
Advanced Jest matchers make automated tests more expressive and reliable. Testing different execution paths, including success cases, edge cases, and exceptions, helps improve code quality and increases confidence when making future changes.