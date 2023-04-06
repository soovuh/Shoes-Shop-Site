const rightBar = document.querySelector(".right-bar");
const EmptyCart = document.querySelector(".empty-a");
let boxes = document.querySelectorAll(".box");

// this function update the info about boxes and add listeners
// for remove button and for input
function boxesUpdate(boxes) {
  boxes.forEach((box, index) => {
    const qty = box.querySelector(".qty");
    qty.addEventListener("input", () => {
      if (qty.value) {
        if (Number(qty.value <= 0)) {
          qty.value = 1;
        }
        calculateSubPrice(boxes);
      }
      document.addEventListener("click", (click) => {
        if (!qty.value && document.activeElement != qty) {
          qty.value = 1;
          calculateSubPrice(boxes);
        }
      });
    });
    const buttonRemove = box.querySelector(".btn-remove");
    buttonRemove.addEventListener("click", () => {
      box.remove();
      boxes = document.querySelectorAll(".box");
      calculateSubPrice(boxes);
    });
  });
}

// This function calculate subtotal price from all boxes on the page
function calculateSubPrice(boxes) {
  if (boxes.length == 0) {
    EmptyCart.classList.add("show");
  }
  let subTotal = 0;
  boxes.forEach((box) => {
    const qty = box.querySelector(".qty");
    const price = box.querySelector(".price-value");
    subTotal += Number(price.innerText) * Number(qty.value);
  });
  DisplayPrices(subTotal);
}

// This function calculate all values and update right bar with total price
function DisplayPrices(subtotal) {
  const tax = subtotal * 0.05;
  const shipping = subtotal > 0 ? 15 : 0;
  const total = tax + subtotal + shipping;
  rightBar.querySelector(".subtotal-value").innerText = `$${subtotal}`;
  rightBar.querySelector(".tax-value").innerText = `$${tax}`;
  rightBar.querySelector(".total-value").innerText = `$${total}`;
  rightBar.querySelector(".shipping-value").innerText = `$${shipping}`;
}

boxesUpdate(boxes);
calculateSubPrice(boxes);
document.addEventListener;
