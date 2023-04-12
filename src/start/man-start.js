// Simulating a request
import { shoesObjs } from "../database.js";
import { categoriesAnimation } from "../animation/categories-script.js";

const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

// filterCards(manObjects);
const activeValues = {
  type: [],
  brand: [],
};

// sortPrice(prepareItems(manObjects))
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const parameters = document.querySelectorAll(".parameters");

document.addEventListener("click", (event) => {
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
});

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

function sortSize(preparedItems) {}

function sortPrice(preparedItems) {
  return preparedItems.filter((obj) => {
    const currentPrice = obj.price - obj.price * obj.sale;
    console.log(currentPrice);
    if (currentPrice >= minPrice.value && currentPrice <= maxPrice.value) {
      return obj;
    }
  });
}

function getActiveKeys(activeValues) {
  const activeKeys = [];
  for (const [key, value] of Object.entries(activeValues)) {
    if (value.length > 0) {
      activeKeys.push(key);
    }
  }
  return activeKeys;
}

function updateHTML(items) {
  console.log(items);
}

window.addEventListener("load", () => {
  updateHTML(manObjects);
});
categoriesAnimation();
