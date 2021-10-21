const form_submitbtn = document.querySelector(".form__submit");
const firstname = document.querySelector("#first-name");
const lastname = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const checkFN = function () {
  if (firstname.value == "") {
    firstname.parentElement.classList.add("text-field--error");
    firstname.parentElement.querySelector(".text-field__error").innerHTML =
      "First name cannot be Empty";
  } else {
    firstname.parentElement.classList.remove("text-field--error");
    firstname.parentElement.querySelector(".text-field__error").innerHTML = "";
  }
};
const checkLN = function () {
  if (lastname.value == "") {
    lastname.parentElement.classList.add("text-field--error");
    lastname.parentElement.querySelector(".text-field__error").innerHTML =
      "Last name cannot be Empty";
  } else {
    lastname.parentElement.classList.remove("text-field--error");
    lastname.parentElement.querySelector(".text-field__error").innerHTML = "";
  }
};
const checkemail = function () {
  if (email.value == "" || email.value.indexOf("@") == -1) {
    email.parentElement.classList.add("text-field--error");
    email.parentElement.querySelector(".text-field__error").innerHTML =
      "Looks like this is not an email";
  } else {
    email.parentElement.classList.remove("text-field--error");
    email.parentElement.querySelector(".text-field__error").innerHTML = "";
  }
};
const checkpassword = function () {
  if (password.value == "") {
    password.parentElement.classList.add("text-field--error");
    password.parentElement.querySelector(".text-field__error").innerHTML =
      "Password cannot be Empty";
  } else {
    password.parentElement.classList.remove("text-field--error");
    password.parentElement.querySelector(".text-field__error").innerHTML = "";
  }
};

firstname.addEventListener("input", checkFN);
firstname.addEventListener("blur", checkFN);
lastname.addEventListener("input", checkLN);
lastname.addEventListener("blur", checkLN);
email.addEventListener("input", checkemail);
email.addEventListener("blur", checkemail);
password.addEventListener("input", checkpassword);
password.addEventListener("blur", checkpassword);

///Form SUBMIT BTN
form_submitbtn.addEventListener("click", () => {
  checkFN();
  checkLN();
  checkemail();
  checkpassword();
});
