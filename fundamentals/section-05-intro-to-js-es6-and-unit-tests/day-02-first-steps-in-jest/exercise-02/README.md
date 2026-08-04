# Day 02 – First Steps in Jest

## Overview
On this day, I learned the fundamentals of automated testing using Jest.
The goal was to understand how to create unit tests, verify that JavaScript functions behave as expected, and validate different execution scenarios to make code more reliable and maintainable.

## What I learned
- How to write unit tests using Jest
- How to organize tests with `describe()` and `it()`
- How to use common Jest matchers such as `toBe()`, `toEqual()`, `toBeDefined()`, `toBeFalsy()`, and `not.toEqual()`
- How to test functions with different inputs and expected outputs
- How to validate edge cases and invalid input
- How automated testing helps detect bugs before deployment

## Practice
Created and tested the following JavaScript functions:

### FizzBuzz
- Tested numbers divisible by 3 and 5
- Tested numbers divisible only by 3
- Tested numbers divisible only by 5
- Tested numbers that are not divisible by either 3 or 5
- Tested invalid (non-numeric) input

### Remove Item
- Verified that an item is correctly removed from an array
- Verified that the returned array is different from the original when an item is removed
- Verified that the original array is returned unchanged when the item does not exist

### Tech List
- Tested that the function returns a sorted list of technology objects
- Tested that each object contains the correct `tech` and `name` properties
- Tested the edge case of an empty array, returning `"Empty!"`

### Hydrate
- Tested that the function correctly counts the total number of alcoholic drinks in a string
- Verified that it returns the recommended number of glasses of water
- Tested both singular (`1 glass of water`) and plural (`X glasses of water`) outputs
- Verified that the function is properly defined before execution

## Key takeaway
Writing automated tests with Jest helps guarantee that functions behave correctly under different conditions. By testing expected results, edge cases, and invalid inputs, I can write more reliable code and refactor it with greater confidence.