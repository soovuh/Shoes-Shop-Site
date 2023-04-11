// Simulating a request
import { shoesObjs } from "../database.js";
import { categoriesAnimation } from "../animation/categories-script.js";

const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

// filterCards(manObjects);
const preparedItems = [];
const activeValues = {
  type: [],
  brand: [],
};

const parameters = document.querySelectorAll(".parameters");
parameters.forEach((parameter) => {
  const parameterID = parameter.id;
  const checkboxes = parameter.querySelectorAll("input");
  checkboxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.checked) {
        activeValues[parameterID].push(box.value);
        updateHTML(prepareItems(manObjects));
      } else {
        const deleteIndex = activeValues[parameterID].indexOf(box.value);
        activeValues[parameterID].splice(deleteIndex, 1);
        updateHTML(prepareItems(manObjects));
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
    } else if (activeKeys.length === 3) {
      if (
        activeValues[activeKeys[0]].includes(obj[activeKeys[0]]) &&
        activeValues[activeKeys[1]].includes(obj[activeKeys[1]]) &&
        activeValues[activeKeys[2]].includes(obj[activeKeys[2]])
      ) {
        return obj;
      }
    } else if (activeKeys.length === 4) {
      if (
        activeValues[activeKeys[0]].includes(obj[activeKeys[0]]) &&
        activeValues[activeKeys[1]].includes(obj[activeKeys[1]]) &&
        activeValues[activeKeys[2]].includes(obj[activeKeys[2]]) &&
        activeValues[activeKeys[3]].includes(obj[activeKeys[3]])
      ) {
        return obj;
      }
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
