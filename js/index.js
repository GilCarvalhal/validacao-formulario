const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

function initApp() {
  addEventInElement(firstName);
  addEventInElement(lastName);
  addEventInElement(password);

  email.addEventListener("blur", function () {
    isEmailValid(email);
  });
}

function addEventInElement(element) {
  element.addEventListener("blur", function () {
    validateEmptyFields(element);
  });
}

initApp();