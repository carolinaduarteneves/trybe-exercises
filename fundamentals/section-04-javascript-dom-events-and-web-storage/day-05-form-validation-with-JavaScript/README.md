# Day 05 – Form Validation with JavaScript 

## Overview
On this day, I focused on learning how to validate form inputs using **JavaScript**.

The goal was to understand how to check user input before submitting a form, ensuring that the required fields are filled correctly and that the data entered follows specific rules.

Through this exercise, I practiced validating form fields, checking input length, and verifying if an email address follows a valid format.

## What I learned
- How to validate required fields
- How to control form submission using `event.preventDefault()`
- How to check text length using `.length`
- How to validate email formats using **Regular Expressions (RegEx)**
- How to display feedback messages using `alert()`


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

---

### Exercise 09 – Adventure Travel Application Form
In this exercise, I built a more complete and styled application form for a fictional company called **ExploreX Travel**.

The goal was to simulate a real-world form where users apply for an **all-expenses-paid adventure trip**, combining **UI design (CSS)** and **form validation (JavaScript)**.

#### Features implemented:

- Responsive layout using **Flexbox**
- Styled form with custom colors and hover effects
- Sectioned layout with an introductory landing area
- Smooth navigation to the form using anchor links

#### Form fields:

- Full Name
- Email Address
- Age
- Favorite Destination (radio buttons)
- Motivation text area
- Preferred Travel Season (select)
- Terms and conditions (checkbox)

#### Validation rules:

- **Name** must be between 5 and 100 characters
- **Email** must follow a valid format using RegEx
- **Age** must be 18 or older
- **Motivation** must be between 100 and 300 characters
- Required fields must be filled before submission

#### JavaScript logic:

- Prevents default form submission using `event.preventDefault()`
- Uses a `validateForm()` function to centralize validation rules
- Displays alerts when validation fails
- Shows success message when all validations pass

#### Styling highlights:

- Dark theme with `#0d1b2a` background
- Glass effect using `rgba(0, 0, 0, 0.3)`
- Custom button hover animation with `transform` and `box-shadow`
- Responsive adjustments for mobile screens using `@media`

This exercise helped me understand how to combine **structure (HTML), style (CSS), and behavior (JavaScript)** to create a more realistic and user-friendly web form.

---

## Key takeaway
Form validation is essential for ensuring that users provide correct and complete information before submitting data.

By combining **JavaScript event handling, conditional logic, and regular expressions**, developers can create forms that are more reliable and user-friendly.

## Live Page

### Exercise 08 – Contact Form Validation
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-05-form-validation-with-javascript/exercise-08/  

### Exercise 09 – Adventure Travel Application Form
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-05-form-validation-with-javascript/exercise-09/