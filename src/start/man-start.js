// Simulating a request
import { shoesObjs } from "../database.js";
import { categoriesAnimation } from "../animation/categories-script.js";

const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

// start of man controller
const activeValues = {
  type: [],
  brand: [],
};

const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const priceSubmitBtn = document.querySelector(".submit-price-btn");
const parameters = document.querySelectorAll(".parameters");

// function to sort objs by brand and type
function prepareItems(manObjects) {
  const activeKeys = getActiveKeys(activeValues);
  return manObjects.filter((obj) => {
    if (activeKeys.length === 0) {
      return obj;
    }
    if (activeKeys.length === 1) {
      if (activeValues[activeKeys[0]].includes(obj[activeKeys[0]])) {
        return obj;
      }
    } else if (activeKeys.length === 2) {
      if (
        activeValues[activeKeys[0]].includes(obj[activeKeys[0]]) &&
        activeValues[activeKeys[1]].includes(obj[activeKeys[1]])
      ) {
        return obj;
      }
    }
  });
}

// function, that get ActiveKeys from activeValues object
function getActiveKeys(activeValues) {
  const activeKeys = [];
  for (const [key, value] of Object.entries(activeValues)) {
    if (value.length > 0) {
      activeKeys.push(key);
    }
  }
  return activeKeys;
}

function sortSize(preparedItems) {}

// function that return arr of objects sorted by min and max price
function sortPrice(preparedItems) {
  checkOnValidPrice();
  return preparedItems.filter((obj) => {
    const currentPrice = obj.price - obj.price * obj.sale;
    if (
      currentPrice >= Number(minPrice.value) &&
      currentPrice <= Number(maxPrice.value)
    ) {
      return obj;
    }
  });
}

// function to check on valid min and max prices
function checkOnValidPrice() {
  if (document.activeElement != minPrice) {
    if (
      !minPrice.value ||
      Number(minPrice.value) <= 0 ||
      Number(minPrice.value) > 1000
    ) {
      minPrice.value = 0;
    }
  }
  if (document.activeElement != maxPrice) {
    if (
      !maxPrice.value ||
      Number(maxPrice.value) < Number(minPrice.value) ||
      Number(maxPrice.value) <= 0 ||
      Number(maxPrice.value) > 1000
    ) {
      maxPrice.value = 1000;
    }
  }
}

// This function should add objs to html file
function updateHTML(items) {
  console.log(items);
}

// creating eventlistener to controll valid price
document.addEventListener("click", () => {
  checkOnValidPrice();
});

// add eventlisteners for type and brand triggers
parameters.forEach((parameter) => {
  const parameterID = parameter.id;
  const checkboxes = parameter.querySelectorAll("input");
  checkboxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.checked) {
        activeValues[parameterID].push(box.value);
        updateHTML(sortPrice(prepareItems(manObjects)));
      } else {
        const deleteIndex = activeValues[parameterID].indexOf(box.value);
        activeValues[parameterID].splice(deleteIndex, 1);
        updateHTML(sortPrice(prepareItems(manObjects)));
      }
    });
  });
});

// eventlistener for price OK button, that update html
priceSubmitBtn.addEventListener("click", () => {
  updateHTML(sortPrice(prepareItems(manObjects)));
});

// When page load, update HTML with all objects that we have from database
window.addEventListener("load", () => {
  updateHTML(manObjects);
});

// end of man-controller
categoriesAnimation();
