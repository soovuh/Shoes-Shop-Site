import { baseLink } from "../constants.js";
import { getCookie } from "./authentication_check.js";

function cartFill(Objects) {
  const shop = document.querySelector(".shop");
  function createobjBox(obj) {
    const baseLink = "product.html?id=";
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = obj.id;

    const img = document.createElement("img");
    img.src = obj.image;
    const imgLink = document.createElement("a");
    imgLink.classList.add("img-link");
    imgLink.href = baseLink + String(obj.id);
    imgLink.appendChild(img);

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = obj.name;

    const price = document.createElement("h4");
    price.classList.add("price");
    const currentPrice =
      obj.sale > 0 ? Math.ceil(obj.price - obj.price * obj.sale) : obj.price;
    price.innerHTML = `Price: $<span class="price-value">${currentPrice}</span> | Size: <span class="size-value">${obj.user_size}</span>`;

    const unit = document.createElement("p");
    unit.classList.add("unit");

    const minus = document.createElement("a");
    minus.classList.add("qty-minus");
    minus.textContent = "-";

    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.classList.add("qty");
    input.name = obj.name;
    input.value = obj.user_qty;

    const plus = document.createElement("a");
    plus.classList.add("qty-plus");
    plus.textContent = "+";

    unit.appendChild(minus);
    unit.appendChild(input);
    unit.appendChild(plus);

    const btnArea = document.createElement("p");
    btnArea.classList.add("btn-area", "btn-remove");

    const trashIcon = document.createElement("ion-icon");
    trashIcon.name = "trash-outline";

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("btn2");
    removeBtn.textContent = "Remove";

    btnArea.appendChild(trashIcon);
    btnArea.appendChild(removeBtn);

    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(unit);
    content.appendChild(btnArea);

    box.appendChild(imgLink);
    box.appendChild(content);

    return box;
  }

  function addBoxes(shop) {
    Objects.forEach((obj) => {
      const box = createobjBox(obj);
      shop.appendChild(box);
    });
  }
  addBoxes(shop);
}

function boxControll(Objects, isAuthenticated) {
  const rightBar = document.querySelector(".right-bar");
  const EmptyCart = document.querySelector(".empty-a");
  let boxes = document.querySelectorAll(".box");
  function boxesUpdate(boxes) {
    boxes.forEach((box) => {
      const qty = box.querySelector(".qty");
      const qtyMinus = box.querySelector(".qty-minus");
      const qtyPlus = box.querySelector(".qty-plus");
      const boxObj = Objects.find((obj) => String(obj.id) === String(box.id));

      const qtySizeObj = boxObj.sizes.find(
        (obj) => (obj.size = boxObj.user_size)
      );
      const maxQty = qtySizeObj.qty;

      qty.addEventListener("input", () => {
        if (qty.value) {
          if (Number(qty.value) <= 0) {
            qty.value = 1;
          } else if (Number(qty.value) > maxQty) {
            qty.value = maxQty;
          }
          // Here we need to update info about qty in user cart
          calculateSubPrice(boxes);
        }
      });

      qtyMinus.addEventListener("click", () => {
        if (qty.value) {
          if (Number(qty.value) <= 0) {
            qty.value = 1;
          } else if (Number(qty.value) > maxQty) {
            qty.value = maxQty;
          } else if (qty.value > 1) {
            qty.value--;
          }
          // Here we need to update info about qty in user cart
          calculateSubPrice(boxes);
        }
      });

      qtyPlus.addEventListener("click", () => {
        if (qty.value) {
          if (Number(qty.value) <= 0) {
            qty.value = 1;
          } else if (Number(qty.value) >= maxQty) {
            qty.value = maxQty;
          } else {
            qty.value++;
          }
        }
        // Here we need to update info about qty in user cart
        calculateSubPrice(boxes);
      });

      document.addEventListener("click", (click) => {
        if (!qty.value && document.activeElement != qty) {
          qty.value = 1;
          // Here we need to update info about qty in user cart
          calculateSubPrice(boxes);
        }
      });

      const buttonRemove = box.querySelector(".btn-remove");
      buttonRemove.addEventListener("click", () => {
        box.remove();
        const requestObj = {
          user_size: boxObj.user_size,
          shoe_id: boxObj.id,
        };
        async function remove_item() {
          const csrfToken = getCookie("csrftoken");
          const sessionId = getCookie("sessionid");
          await fetch(`${baseLink}/cart/remove_item`, {
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
              if (data.message !== "CartItem Removed") {
                console.error(`Some error: ${data.message}`);
              }
            });
        }
        remove_item();

        boxes = document.querySelectorAll(".box");
        calculateSubPrice(boxes);
      });
    });
  }

  // This function calculate subtotal price from all boxes on the page
  function calculateSubPrice(boxes) {
    if (boxes.length == 0) {
      const EmptyCartText = EmptyCart.querySelector("h2");
      if (!isAuthenticated) {
        EmptyCartText.textContent = "Firstly, you need login!";
        EmptyCart.href = "login.html";
      } else {
        EmptyCartText.textContent =
          "Your shopping cart is empty, go to categories to fill it up!";
        EmptyCart.href = "man.html";
      }
      EmptyCart.classList.add("show");
    }
    let subTotal = 0;
    boxes.forEach((box) => {
      const qty = box.querySelector(".qty");
      const price = box.querySelector(".price-value");
      subTotal += Number(price.innerText) * Number(qty.value);
    });
    DisplayPrices(subTotal);
    return subTotal;
  }

  // This function calculate all values and update right bar with total price
  function DisplayPrices(subtotal) {
    const tax = Math.ceil(subtotal * 0.05);
    const shipping = subtotal > 0 ? 15 : 0;
    const total = tax + subtotal + shipping;
    rightBar.querySelector(".subtotal-value").innerText = `$${subtotal}`;
    rightBar.querySelector(".tax-value").innerText = `$${tax}`;
    rightBar.querySelector(".total-value").innerText = `$${total}`;
    rightBar.querySelector(".shipping-value").innerText = `$${shipping}`;
  }

  boxesUpdate(boxes);
  calculateSubPrice(boxes);
}

export { cartFill, boxControll };
