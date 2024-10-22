/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function validate() {
  document.querySelector(".alert").classList.add("hidden");
  document.querySelector(".alert").innerHTML = "";

  let warning = ``;
  let cardNumber = document.querySelector("#cardNumber");

  if (cardNumber.value.length < 15 || cardNumber.value.length > 16) {
    warning += `<li>Credit card number is incorrect</li>`;
  }

  let secutyCode = document.querySelector("#securityCode");
  if (secutyCode.value.length !== 3) {
    warning += `<li>Credit card CVC is incorrect</li>`;
  }

  let amount = document.querySelector("#amount");
  if (amount.value.length < 0) {
    warning += `<li>Ballance can not be less than $1</li>`;
  }

  let name = document.querySelector("#firstName");
  if (name.value.length < 2) {
    warning += `<li> Please Enter a valid Name</li>`;
  }

  let lastName = document.querySelector("#LastName");
  if (lastName.value.length < 2) {
    warning += `<li>Lastname is not correct</li>`;
  }

  let city = document.querySelector("#city");

  let state = document.querySelector("#state");

  let ZipCode = document.querySelector("#code");
  if (lastName.value.length < 2) {
    warning += `<li>Zipcode entering is incorrect</li>`;
  }

  if (warning.length >= 3) {
    document.querySelector(".alert").innerHTML = `<ul>${warning}</ul>`;
    document.querySelector(".alert").classList.remove("hidden");
  }
}
let myForm = document.querySelector("#sendForm");

myForm.addEventListener("click", event => {
  event.preventDefault();
  validate();
});
