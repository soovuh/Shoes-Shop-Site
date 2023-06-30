import { baseLink } from "../constants.js";
import { getCookie } from "./authentication_check.js";

function profileControlStart(userInfo, orderInfo) {
  const UserInfoContainer = document.querySelector(".user-info");
  const HistoryContainer = document.querySelector(".history-container");
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
  const errorBox = document.querySelector(".error-box");
  const errorMessageElement = errorBox.querySelector(".error-message");
  const closeErrorBox = errorBox.querySelector(".icon-close-message");
  const okBtn = errorBox.querySelector(".btn");
  const dataSettignsBtn = document.querySelector(".data");
  const HistoryBtn = document.querySelector(".history");
  const orderList = HistoryContainer.querySelector(".mid-container");

  orderInfo.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return dateB - dateA;
  });

  orderInfo.forEach((order) => {
    const orderBox = document.createElement("div");
    orderBox.classList.add("order-box");

    const orderInfo = document.createElement("div");
    orderInfo.classList.add("order");

    const orderNumber = document.createElement("span");
    orderNumber.classList.add("order-number");
    orderNumber.textContent = order.order_name.toUpperCase();
    orderInfo.appendChild(orderNumber);

    const dateObj = new Date(order.created_at);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const formattedDate = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = formattedDate;
    orderInfo.appendChild(date);

    orderBox.appendChild(orderInfo);

    const items = document.createElement("div");
    items.classList.add("items");

    const shoeNames = [];
    order.items.forEach((shoe) => {
      const name = document.createElement("span");
      name.classList.add("name");
      name.textContent = `${shoe.shoe_name} ${shoe.user_size} x ${shoe.user_qty}`;
      items.appendChild(name);
      const br = document.createElement("br");
      items.appendChild(br);
    });

    orderBox.appendChild(items);

    const metaData = document.createElement("div");
    metaData.classList.add("meta-data");

    const status = document.createElement("span");
    status.classList.add("status");
    const capitalizedStatus =
      order.status.charAt(0).toUpperCase() +
      order.status.slice(1).toLowerCase();
    status.textContent = capitalizedStatus;
    metaData.appendChild(document.createTextNode("Status: "));
    metaData.appendChild(status);

    const total = document.createElement("span");
    total.classList.add("total");
    total.textContent = Math.ceil(Number(order.total_price));
    metaData.appendChild(document.createElement("br"));
    metaData.appendChild(document.createTextNode("Total: $"));
    metaData.appendChild(total);

    orderBox.appendChild(metaData);

    orderList.appendChild(orderBox);
  });

  let activeContainer = "data";

  dataSettignsBtn.addEventListener("click", () => {
    if (activeContainer === "history") {
      HistoryContainer.classList.remove("active");
      UserInfoContainer.classList.add("active");
      activeContainer = "data";
    }
  });

  HistoryBtn.addEventListener("click", () => {
    if (activeContainer === "data") {
      HistoryContainer.classList.add("active");
      UserInfoContainer.classList.remove("active");
      activeContainer = "history";
    }
  });

  closeErrorBox.addEventListener("click", () => {
    errorBox.classList.remove("active");
  });

  okBtn.addEventListener("click", () => {
    errorBox.classList.remove("active");
  });
  errorBox.classList.add("go");
  usernameInput.value = userInfo.username;
  const addressObj = userInfo.address ? userInfo.address : {};
  if (userInfo.phone_number) {
    phoneNumberInput.value = userInfo.phone_number;
  } else {
    userInfo.phoneNumber = "";
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

    if (!phoneNumberInput.value) {
      moveLabels.forEach((label) => label.style.removeProperty("top"));
    }

    addressBox.setAttribute("disabled", "disabled");
    addressBox.classList.remove("active");
    addressBox.classList.add("off");
  });

  async function change_user_info(requestObj) {
    const csrfToken = getCookie("csrftoken");
    const sessionId = getCookie("sessionid");
    await fetch(`${baseLink}/accounts/change_user_info/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "X-CSRFToken": csrfToken,
        Cookie: `csrftoken=${csrfToken}; sessionid=${sessionId}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObj),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Change Success") {
          location.reload(true);
        } else {
          errorMessageElement.innerHTML = data.message;
          errorBox.classList.add("active");
        }
      });
  }

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
      change_user_info(requestObj);
    } else if (postcode && city && street) {
      if (username != userInfo.username) {
        requestObj.username = username;
      }
      if (phoneNumber != userInfo.phoneNumber) {
        requestObj.phone_number = phoneNumber;
      }
      requestObj.city = city;
      requestObj.street = street;
      requestObj.postcode = postcode;
      change_user_info(requestObj);
    } else {
      errorMessageElement.innerHTML =
        "City, street and postcode must be together";
      errorBox.classList.add("active");
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
