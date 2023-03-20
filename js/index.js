const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

addEventInElement(firstName);
addEventInElement(lastName);
addEventInElement(password);

function addEventInElement(element) {
  element.addEventListener("blur", function () {
    if (!element.value || element.value.length < 3) {
      console.log("Inválido");
    } else {
      console.log("Válido");
    }
  });
}
