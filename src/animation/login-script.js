const wrapper = document.querySelector(".wrapper");
const login_link = document.querySelector(".login-link");
const register_link = document.querySelector(".register-link");
const btn_popup = document.querySelector(".btnLogin-popup");
const icon_close = document.querySelector(".icon-close");
const icon_close_forgot = document.querySelector(".icon-close-forgot");
const forgot_box = document.querySelector(".forgot-box");
const forgot_btn = document.querySelector(".forgot-a");
const inputFields = document.querySelectorAll(".input-box input");
const labels = document.querySelectorAll(".input-box label");

inputFields.forEach((inputField, index) => {
  inputField.addEventListener("input", () => {
    if (inputField.value === "") {
      labels[index].style.removeProperty("top");
    } else {
      labels[index].style.top = "-5px";
    }
  });
});

forgot_btn.addEventListener("click", () => {
  forgot_box.classList.add("active");
  wrapper.classList.remove("active-popup");
});

icon_close_forgot.addEventListener("click", () => {
  forgot_box.classList.remove("active");
  wrapper.classList.add("active-popup");
});
register_link.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login_link.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn_popup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  navigation.classList.remove("show");
  toggler.classList.remove("show");
  forgot_box.classList.remove("active");
});
icon_close.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function login_show() {
  wrapper.classList.add("active-popup");
  wrapper.classList.add("go");
  forgot_box.classList.add("go");
}
setTimeout(login_show, 1500);
