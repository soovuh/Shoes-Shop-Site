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
  const cityInput = document.querySelector("#city");
  const streetInput = document.querySelector("#street");
  const postcodeInput = document.querySelector("#postcode");
  const addressData = document.querySelectorAll(".address-data");
  const addressBox = document.querySelector(".address");
  const moveLabels = document.querySelectorAll(".move");

  usernameInput.value = userInfo.username;
  const addressObj = userInfo.address ? userInfo.address : {};
  if (userInfo.phone_number) {
    phoneNumberInput.value = userInfo.phone_number;
  }
  if (addressObj.city) {
    addressInput.value = `${addressObj.city} city, ${addressObj.street} street, postcode: ${addressObj.postcode}`;
    cityInput.value = addressObj.city;
    streetInput.value = addressObj.street;
    postcodeInput.value = addressObj.postcode;
  } else {
    addressObj.city = "";
    addressObj.street = "";
    addressObj.postcode = "";
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

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const phoneNumber = phoneNumberInput.value;
    const city = cityInput.value;
    const street = streetInput.value;
    const postcode = postcodeInput.value;
    const requestObj = {};
    if (!postcode && !city && !street) {
      if (username != userInfo.username) {
        requestObj.username = username;
      }
      if (phoneNumber != userInfo.phoneNumber) {
        requestObj.phone_number = phoneNumber;
      }
      console.log(requestObj);
    } else if (postcode && address && street) {
      if (username != userInfo.username) {
        requestObj.username = username;
      }
      if (phoneNumber != userInfo.phoneNumber) {
        requestObj.phone_number = phoneNumber;
      }
      if (city != addressObj.city) {
        requestObj.city = city;
      }
      if (street != addressObj.street) {
        requestObj.street = street;
      }
      if (postcode != addressObj.postcode) {
        requestObj.postcode = postcode;
      }
      console.log(requestObj);
    } else {
      console.log("error!");
    }
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
