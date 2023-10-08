import { checkAuthentication, getCookie } from "./authentication_check.js";
import { baseLink } from "../constants.js";

const csrfToken = getCookie("csrftoken");
const sessionId = getCookie("sessionid");
const isAuthenticated = await checkAuthentication(csrfToken, sessionId);

if (isAuthenticated) {
  window.location.href = "profile.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".form-box.login form");
  const registerForm = document.querySelector(".form-box.register form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    fetch(`${baseLink}/accounts/login/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Invalid credentials") {
          const emailVerificationWindow = document.querySelector(
            ".email-verification-box"
          );
          const boxMessage = emailVerificationWindow.querySelector("h2");
          emailVerificationWindow.classList.add("go");
          const iconclose = emailVerificationWindow.querySelector(
            ".icon-close-message"
          );
          iconclose.addEventListener("click", () => {
            window.location.href = "login.html";
          });
          boxMessage.textContent = `If you dont have account, click register. If you don't receive the email, press send another.`;
          emailVerificationWindow.classList.add("active");
        } else if (data.message === "Login successful") {
          document.cookie = `csrftoken=${data.csrf_token}; path=/`;
          document.cookie = `sessionid=${data.session_id}; path=/`;
          window.location.href = "profile.html";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailVerificationWindow = document.querySelector(
      ".email-verification-box"
    );
    const boxMessage = emailVerificationWindow.querySelector("h2");
    emailVerificationWindow.classList.add("go");
    const iconclose = emailVerificationWindow.querySelector(
      ".icon-close-message"
    );
    iconclose.addEventListener("click", () => {
      window.location.href = "login.html";
    });
    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    fetch(`${baseLink}/accounts/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Registration successful") {
          emailVerificationWindow.classList.add("active");
        } else {
          boxMessage.textContent = `Try another credentials, something wrong!`;
          emailVerificationWindow.classList.add("active");
        }
      })
      .catch((error) => {
        boxMessage.textContent = `Try another credentials, something wrong!`;
        emailVerificationWindow.classList.add("active");
      });
  });
});
