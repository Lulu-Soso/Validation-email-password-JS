const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  confirmPassField = form.querySelector(".confirm-password"),
  confirmPassInput = confirmPassField.querySelector(".confirmPassword");

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); // adding invalid class if email value do not match with emailPattern
  }
  emailField.classList.remove("invalid"); // removing invalid class if email value matched with emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); // getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); // adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); // removing invalid class if password input value matched with passPattern
}

// Confirm Password Validation
function confirmPass() {
  if (
    passInput.value !== confirmPassInput.value ||
    confirmPassInput.value === ""
  ) {
    return confirmPassField.classList.add("invalid");
  }
  confirmPassField.classList.remove("invalid");
}

// Calling Function on Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prventing form submitting
  checkEmail();
  createPass();
  confirmPass();

  // Calling function on key up
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  confirmPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !confirmPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
