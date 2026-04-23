# Day 06 – JavaScript Libraries and CSS Frameworks

## Overview
On this day, I focused on using **Bootstrap** together with **JavaScript** to create and validate a form with a more professional and responsive design.

The goal was to understand how to combine a CSS framework with JavaScript validation to improve both the **visual interface** and the **user experience**.

Through this exercise, I practiced using Bootstrap components, applying built-in validation styles, and enhancing form validation with custom JavaScript logic.

---

## What I learned
- How to use **Bootstrap** to style forms and layouts
- How to create responsive layouts using Bootstrap grid system
- How to apply Bootstrap validation classes like `needs-validation` and `was-validated`
- How to use `checkValidity()` for form validation
- How to prevent form submission using `event.preventDefault()`
- How to validate inputs in real time using `addEventListener`
- How to validate email formats using **Regular Expressions (RegEx)**
- How to create custom validation messages using `setCustomValidity()`
- How to combine **Bootstrap styles with JavaScript logic**

---

## Practice

### Exercise 10 – Form Validation with Bootstrap
In this exercise, I created a **subscription form** for a streaming platform called **Codeflix**, using Bootstrap for styling and JavaScript for validation.

The page also includes a pricing section with three plans:

- **Basic**
- **Standard**
- **Premium**

The form includes the following fields:

- **Full Name**
- **Email Address**
- **Age**
- **Plan selection**
- **Terms and conditions checkbox**

The validation system checks several conditions before allowing the form to be submitted.

The exercise included:

- Verifying that all required fields are filled
- Validating the email format using both HTML (`type="email"`) and JavaScript (RegEx)
- Ensuring the age is between valid limits (1 to 120)
- Preventing form submission if any field is invalid
- Displaying visual feedback using Bootstrap (red/green borders)
- Showing error messages using `invalid-feedback`
- Applying real-time validation for better user experience

If all validations pass, the form is successfully submitted and the user receives proper feedback.

This exercise helped me understand how to build **modern, responsive, and user-friendly forms using Bootstrap and JavaScript**.

---

## Key takeaway
Combining **Bootstrap and JavaScript** allows developers to create forms that are both visually appealing and functionally robust.

Bootstrap simplifies styling and responsiveness, while JavaScript adds powerful validation logic, resulting in a better **user experience and data reliability**.

---

## Live Page

### Exercise 10 – Form Validation with Bootstrap
You can view this exercise live here:  
👉 https://carolinaduarteneves.github.io/trybe-exercises/fundamentals/section-04-javascript-dom-events-and-web-storage/day-06-javascript-libraries-and-css-frameworks/exercise-10/