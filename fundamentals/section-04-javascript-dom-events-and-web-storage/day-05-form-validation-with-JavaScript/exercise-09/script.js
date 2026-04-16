function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const motivation = document.getElementById("motivation").value;
  const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 5 || name.length > 100) {
    alert("Please enter your full name!");
    return false;
  }

  if (email.length < 5 || (email.length > 254 || !emailPatern.test(email))) {
    alert("Please enter a valid email address.");
    return false;
  }


  if (Number(age) < 18 ) {
    alert("Applicants must be 18 years or older");
  }

  if (motivation.length < 100 || motivation.length > 300) {
    alert("Please write a message between 100 and 300 characters.");
    return false;
  }

  return true;
}

document.getElementById("form").addEventListener("submit", function(event) {
event.preventDefault();
    if (validateForm()) {
        alert("Application submitted successfully!")
    }
})