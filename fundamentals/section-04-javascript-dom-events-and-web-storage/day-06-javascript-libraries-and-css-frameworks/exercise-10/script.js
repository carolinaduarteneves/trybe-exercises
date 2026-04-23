(() => {
  "use strict";

  const form = document.getElementById("form");
  const age = document.getElementById("age");
  const email = document.getElementById("email");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  age.addEventListener("input", () => {
    if (age.value < 18 || age.value > 120) {
      age.setCustomValidity("Invalid age");
    } else {
      age.setCustomValidity("");
    }
  });

  email.addEventListener("input", () => {
    if (!emailPattern.test(email.value)) {
      email.setCustomValidity("Invalid email");
    } else {
      email.setCustomValidity("");
    }
  });

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
})();
