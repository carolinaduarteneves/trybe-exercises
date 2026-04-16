# Day 02 – Form Validation with JavaScript

## Overview
On this day, I focused on learning how to validate form inputs using **JavaScript**.

The goal was to understand how to check user input before submitting a form, ensuring that the required fields are filled correctly and that the data entered follows specific rules.

Through this exercise, I practiced validating form fields, checking input length, and verifying if an email address follows a valid format.

## What I learned
- How to access form inputs using `getElementById`
- How to retrieve user input values with `.value`
- How to validate required fields
- How to control form submission using `event.preventDefault()`
- How to check text length using `.length`
- How to validate email formats using **Regular Expressions (RegEx)**
- How to display feedback messages using `alert()`
- How to attach events to forms using `addEventListener`

## Practice

### Exercise 08 – Contact Form Validation
In this exercise, I created a **Contact Form** and implemented validation logic using JavaScript.

The form includes three main fields:

- **Name**
- **Email**
- **Message**

The validation system checks several conditions before allowing the form to be submitted.

The exercise included:

- Verifying that all fields are filled
- Ensuring the **name length** is between 3 and 50 characters
- Ensuring the **email length** is between 5 and 50 characters
- Validating the email format using a **regular expression**
- Preventing form submission when validation fails
- Displaying feedback messages to guide the user

If all validations pass, the form shows a confirmation message indicating that the validation was successful.

This exercise helped me understand how JavaScript can be used to improve **user experience and data integrity in web forms**.

## Key takeaway
Form validation is essential for ensuring that users provide correct and complete information before submitting data.

By combining **JavaScript event handling, conditional logic, and regular expressions**, developers can create forms that are more reliable and user-friendly.

## Live Page

### Exercise 08 – Contact Form Validation
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-02-form-validation-with-javascript/exercise-08/