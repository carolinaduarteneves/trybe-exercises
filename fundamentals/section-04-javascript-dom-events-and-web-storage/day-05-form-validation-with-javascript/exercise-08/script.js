function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return false;
  }

  if (name.length < 3 || name.length > 50) {
    alert("Your full name must be between 3 and 50 characters long.");
    return false;
  }

  if (email.length < 5 || email.length > 50) {
    alert("Your full name must be between 5 and 50 characters long.");
    return false;
  }

  const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPatern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form validated successfully!");
    }
  });
