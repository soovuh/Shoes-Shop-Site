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

export { orderShoesFill };
