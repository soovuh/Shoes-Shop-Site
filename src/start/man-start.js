// Importing necessary modules
import { shoesObjs } from "../database.js";
import { categoriesAnimation } from "../animation/categories-script.js";

// Filtering shoes objects by sex
const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

// Object to hold active type and brand values
const activeValues = {
  type: [],
  brand: [],
};

// Querying DOM elements
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const priceSubmitBtn = document.querySelector(".submit-price-btn");
const parameters = document.querySelectorAll(".parameters");

// Function to get active keys from activeValues object
function getActiveKeys(activeValues) {
  const activeKeys = [];
  for (const [key, value] of Object.entries(activeValues)) {
    if (value.length > 0) {
      activeKeys.push(key);
    }
  }
  return activeKeys;
}

// Function to sort objects by brand and type
function getSortedTypeAndBrand(manObjects) {
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

// Function to sort objects by size
function getSortedSize(preparedItems) {}

// Function to sort objects by price range
function getSortedPrice(preparedItems) {
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

// Function to check if the min and max prices are valid
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

// Function to sort all objects
function sortAll(manObjects) {
  const sortedByTypeAndBrand = getSortedTypeAndBrand(manObjects);
  // const sortedBySize = getSortedSize(sortedByTypeAndBrand)
  const sortedByPrice = getSortedPrice(sortedByTypeAndBrand);
  return sortedByPrice;
}

// Function to update HTML with items
function updateHTML(items) {
  console.log(items);
}

// Event listener to update HTML when the page loads
document.addEventListener("click", () => {
  checkOnValidPrice();
});

// Event listener to update activeValues object
// and update HTML when a checkbox is clicked
parameters.forEach((parameter) => {
  const parameterID = parameter.id;
  const checkboxes = parameter.querySelectorAll("input");
  checkboxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.checked) {
        activeValues[parameterID].push(box.value);
        updateHTML(sortAll(manObjects));
      } else {
        const deleteIndex = activeValues[parameterID].indexOf(box.value);
        activeValues[parameterID].splice(deleteIndex, 1);
        updateHTML(sortAll(manObjects));
      }
    });
  });
});

// Event listener to check if the prices are valid
priceSubmitBtn.addEventListener("click", () => {
  updateHTML(sortAll(manObjects));
});

// Event listener to update HTML when the page loads
window.addEventListener("load", () => {
  updateHTML(manObjects);
});

// end of man-controller
categoriesAnimation();
