# Day 01 – OOP Fundamentals

## Overview
On this day, I learned the fundamentals of Object-Oriented Programming (OOP) in JavaScript.

The goal was to understand how classes and objects work, how to create reusable blueprints using classes, and how to define attributes and methods to model real-world entities.

## What I learned
- What Object-Oriented Programming (OOP) is
- How to create classes using the `class` keyword
- How to use constructors to initialize object properties
- How to create object instances with the `new` keyword
- How to define and access object attributes
- How to create methods inside a class
- How to use the `this` keyword to access object properties

## Practice

### Character Class

Created a `Character` class to represent a game character.

#### Properties
- `name`
- `life`
- `strength`

#### Methods
- `showStatus()`
  - Displays the character's name, life, and strength.
- `attack()`
  - Displays an attack message using the character's name.

#### Object Instances

Created two different characters:

- **Arthas**
  - Life: 100
  - Strength: 80

- **Glacius**
  - Life: 200
  - Strength: 100

Each object uses the same class while maintaining its own independent values.

## Key takeaway
Object-Oriented Programming allows code to be organized into reusable classes that represent real-world entities. Using constructors, properties, and methods makes applications easier to maintain, extend, and reuse as projects grow.