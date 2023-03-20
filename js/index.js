const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

function initApp() {
  addEventInElement(firstName);
  addEventInElement(lastName);
  addEventInElement(password);
  addEventInElement(email);
}

function addEventInElement(element) {
  element.addEventListener("blur", function () {
    if (element.type === "text" || element.type === "password") {
      validateEmptyFields(element);
    } else {
      isEmailValid(email);
    }
  });
}

initApp();
