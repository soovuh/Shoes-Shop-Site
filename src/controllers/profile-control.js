import { baseLink } from "../constants.js";
import { getCookie } from "./authentication_check.js";

function profileControlStart(userInfo) {
  const inputFields = document.querySelectorAll(".input-box input");
  const logoutBtn = document.querySelector(".logout");
  const inputLabels = document.querySelectorAll(".input-box label");
  const changeBtn = document.querySelector(".change");
  const saveBtn = document.querySelector(".save-btn");
  const usernameInput = document.querySelector("#username");
  const phoneNumberInput = document.querySelector("#phone");
  const addressInput = document.querySelector("#address");
  const addressData = document.querySelectorAll(".address-data");
  const addressBox = document.querySelector(".address");
  const moveLabels = document.querySelectorAll(".move");

  usernameInput.value = userInfo.username;
  if (userInfo.phone_number) {
    phoneNumberInput.value = userInfo.phone_number;
  }
  if (userInfo.address) {
    addressInput.value = userInfo.address;
  }

  changeBtn.addEventListener("click", () => {
    saveBtn.classList.add("active");
    addressData.forEach((field) => {
      field.removeAttribute("disabled");
      field.classList.add("active");
    });
    inputFields.forEach((field) => {
      field.removeAttribute("disabled");
      field.classList.add("active");
    });
    if (phoneNumberInput.value === "-------") {
      phoneNumberInput.value = "";
    }
    if (addressInput.value === "-------") {
      addressInput.value = "";
    }
    moveLabels.forEach((label) => label.style.removeProperty("top"));

    addressBox.setAttribute("disabled", "disabled");
    addressBox.classList.remove("active");
    addressBox.classList.add("off");
  });

  logoutBtn.addEventListener("click", () => {
    document.cookie =
      "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "../../public/pages/login.html";
  });

  inputFields.forEach((inputField, index) => {
    if (inputField.value) {
      inputLabels[index].style.top = "-5px";
    }
    inputField.addEventListener("input", () => {
      if (inputField.value === "") {
        inputLabels[index].style.removeProperty("top");
      } else {
        inputLabels[index].style.top = "-5px";
      }
    });
  });
}

export { profileControlStart };
