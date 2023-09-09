const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Email validator
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//Length checker
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be ${min} character long`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less then ${max}`);
  } else {
    showSuccess(input);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(input) {
  input.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${element.id} is required`);
    } else {
      showSuccess(element);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 25);
  checkLength(password, 3, 20);
});
