import { baseLink } from "../constants.js";
import { getCookie } from "./authentication_check.js";

function orderShoesFill(cartObjs) {
  const productBaseLink = "product.html?id=";
  let subtotal = 0;
  cartObjs.forEach((element) => {
    const currentPrice =
      element.sale > 0
        ? Math.ceil(element.price - element.price * element.sale)
        : element.price;
    subtotal += Number(currentPrice);
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = element.id;
    const img = document.createElement("img");
    img.src = element.image;
    const imgLink = document.createElement("a");
    imgLink.classList.add("img-link");
    imgLink.href = productBaseLink + String(element.id);
    imgLink.appendChild(img);
    const content = document.createElement("div");
    content.classList.add("content");
    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = element.name;
    const size = document.createElement("h4");
    size.classList.add("price");
    size.textContent = "Size: ";
    const sizeValue = document.createElement("span");
    sizeValue.classList.add("size-value");
    sizeValue.textContent = element.user_size;
    size.appendChild(sizeValue);
    const qty = document.createElement("h4");
    qty.classList.add("qty");
    qty.textContent = "Quantity: ";
    const qtyValue = document.createElement("span");
    qtyValue.classList.add("qty-value");
    qtyValue.textContent = element.user_qty;
    qty.appendChild(qtyValue);
    content.appendChild(name);
    content.appendChild(size);
    content.appendChild(qty);
    box.appendChild(imgLink);
    box.appendChild(content);
    document.querySelector(".cart-info").appendChild(box);
  });
  const total = subtotal + Math.ceil(subtotal * 0.05) + 15;
  document.querySelector(".total").textContent = "$" + total;
}

function alertMessage(text, url) {
  const alertBox = document.querySelector(".alert");
  const alertMessage = alertBox.querySelector("h2");
  alertMessage.textContent = text;
  alertBox.classList.add("active");
  const okBtn = alertBox.querySelector(".alert-btn");
  const closeBtn = alertBox.querySelector(".icon-close-alert");
  okBtn.addEventListener("click", () => {
    window.location.href = url;
  });
  closeBtn.addEventListener("click", () => {
    window.location.href = url;
  });
  document.addEventListener("click", () => {
    window.location.href = url;
  });
}

function orderUserFill(userObj) {
  const emailBox = document.querySelector(".email");
  const phoneNumberBox = document.querySelector("#phone");
  const cityBox = document.querySelector("#city");
  const streetBox = document.querySelector("#street");
  const postcodeBox = document.querySelector("#postcode");

  emailBox.textContent = userObj.email;
  phoneNumberBox.value = userObj.phone_number;
  cityBox.value = userObj.address.city;
  streetBox.value = userObj.address.street;
  postcodeBox.value = userObj.address.postcode;

  async function make_order(requestObj) {
    if (document.querySelectorAll(".box").length === 0) {
      alertMessage("No shoes to order!", "man.html");
    } else {
      const csrfToken = getCookie("csrftoken");
      const sessionId = getCookie("sessionid");
      await fetch(`${baseLink}/orders/create_order/`, {
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
          if (data.message === "Order created") {
            alertMessage("Order was created!", "profile.html");
          } else if (data.message === "Cart is empty!") {
            alertMessage("Cart is empty", "man.html");
          }
        });
    }
  }

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const phone_number = phoneNumberBox.value;
    const city = cityBox.value;
    const street = streetBox.value;
    const postcode = postcodeBox.value;
    const requestObj = {};
    if (phone_number != userObj.phone_number) {
      requestObj.phone_number = phone_number;
    }
    if (city != userObj.city) {
      requestObj.city = city;
    }
    if (street != userObj.street) {
      requestObj.street = street;
    }
    if (phone_number != userObj.postcode) {
      requestObj.postcode = postcode;
    }

    requestObj.total = Number(
      document.querySelector(".total").textContent.slice(1)
    );
    make_order(requestObj);
  });
}

export { orderShoesFill, orderUserFill };
