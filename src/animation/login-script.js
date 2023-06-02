const wrapper = document.querySelector(".wrapper");
const login_link = document.querySelector(".login-link");
const register_link = document.querySelector(".register-link");
const btn_popup = document.querySelector(".btnLogin-popup");
const icon_close = document.querySelector(".icon-close");
const icon_close_forgot = document.querySelector(".icon-close-forgot");

const inputFields = document.querySelectorAll(".input-box input");
const labels = document.querySelectorAll(".input-box label");
const navigation = document.querySelector(".navigation");
const toggler = document.querySelector(".toggler");
const resendEmail = document.querySelector(".resend-email");
const resetPassword = document.querySelector(".forgot-a");

resendEmail.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:8000/accounts/resend";
});

resetPassword.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:8000/accounts/reset/send_email";
});

inputFields.forEach((inputField, index) => {
  inputField.addEventListener("input", () => {
    if (inputField.value === "") {
      labels[index].style.removeProperty("top");
    } else {
      labels[index].style.top = "-5px";
    }
  });
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
}
setTimeout(login_show, 1500);
