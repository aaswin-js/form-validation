window.onload = function () {
      document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let error = document.getElementById("formError");

        if (name === "" || email === "") {
          error.textContent = "All fields are required.";
          error.style.color = "red";
        } else if (!email.includes("@") || !email.includes(".")) {
          error.textContent = "Enter a valid email.";
          error.style.color = "red";
        } else {
          error.textContent = "Form submitted successfully!";
          error.style.color = "green";
        }
      });
    };