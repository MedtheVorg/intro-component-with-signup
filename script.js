const form_submitbtn = document.querySelector(".form__submit");
const form__inputs = document.querySelectorAll(".form__inputwarning");

form_submitbtn.addEventListener("click", function () {
  console.log(this.className, form__inputs.length);
  for (let i = 0; i < form__inputs.length; i++) {
    console.log(form__inputs[i]);
    if (form__inputs[i].querySelector("input").value == "") {
      form__inputs[i].querySelector("input").style.border = "2px solid #ff7a7a";
      form__inputs[i].querySelector(".warning").classList.remove("hidden");
      form__inputs[i].querySelector(".message").classList.remove("hidden");
    } else {
      form__inputs[i].querySelector("input").style.border =
        "1px solid rgba(0, 0, 0, 0.1)";
      form__inputs[i].querySelector(".warning").classList.add("hidden");
      form__inputs[i].querySelector(".message").classList.add("hidden");
    }
  }
});
