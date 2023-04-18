function startFiltering(Objects) {
  // Object to hold active type and brand values
  const activeValues = {
    type: [],
    brand: [],
  };
  const activeSizes = [];
  let sortValue = "default";

  // Querying DOM elements
  const sortButtons = document.querySelectorAll(".dropdown-item");
  const minPrice = document.querySelector("#min-price");
  const maxPrice = document.querySelector("#max-price");
  const priceSubmitBtn = document.querySelector(".submit-price-btn");
  const parameters = document.querySelectorAll(".parameters");
  const sizeNav = document.querySelector(".size-select");
  const sizeBoxes = sizeNav.querySelectorAll("input");
  const cardContainer = document.querySelector(".cards-container");

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
  function getSortedTypeAndBrand(Objects) {
    const activeKeys = getActiveKeys(activeValues);
    return Objects.filter((obj) => {
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
  function getSortedSize(preparedItems) {
    if (activeSizes.length === 0) {
      return preparedItems;
    }
    const prepared = preparedItems.filter((obj) => {
      for (let i = 0; i < obj.size.length; i++) {
        if (activeSizes.includes(obj.size[i])) {
          return obj;
        }
      }
    });

    return prepared;
  }

  // Function to sort objects by price range
  function getSortedPrice(preparedItems) {
    checkOnValidPrice();
    return preparedItems.filter((obj) => {
      const currentPrice = Math.ceil(obj.price - obj.price * obj.sale);
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

  function sortItems(items) {
    if (sortValue === "default") {
      items.sort((a, b) => b.sale - a.sale);
    } else if (sortValue === "low") {
      items.sort(
        (a, b) => a.price - a.price * a.sale - (b.price - b.price * b.sale)
      );
    } else if (sortValue === "high") {
      items.sort(
        (a, b) => b.price - b.price * b.sale - (a.price - a.price * a.sale)
      );
    } else if (sortValue === "latest") {
      items.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortValue === "popularity") {
      items.sort((a, b) => b.views - a.views);
    }
    return items;
  }

  // Function to sort all objects
  function filterAll(Objects) {
    const filteredByTypeAndBrand = getSortedTypeAndBrand(Objects);
    const filteredBySize = getSortedSize(filteredByTypeAndBrand);
    const filteredByPrice = getSortedPrice(filteredBySize);
    const sortedItems = sortItems(filteredByPrice);
    return sortedItems;
  }

  function addProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-image");
    img.src = product.image;
    img.alt = product.name;
    const imgLink = document.createElement("a");
    imgLink.href = product.href;
    imgLink.appendChild(img);
    card.appendChild(imgLink);

    const productLink = document.createElement("a");
    productLink.classList.add("product-a");
    productLink.classList.add("product-link");
    productLink.href = product.href;
    const content = document.createElement("div");
    content.classList.add("card-content");
    const name = document.createElement("p");
    name.classList.add("product-name");
    name.textContent = product.name;

    const pricesBox = document.createElement("div");
    pricesBox.classList.add("prices-box");
    const oldPrice = document.createElement("p");
    oldPrice.classList.add("old-price");
    const currentPrice = document.createElement("p");
    if (product.sale !== 0) {
      oldPrice.textContent = "$" + product.price;
    } else {
      currentPrice.classList.add("only-current");
    }
    currentPrice.classList.add("current-price");
    if (product.sale !== 0) {
      const salePrice = Math.ceil(product.price - product.price * product.sale);
      currentPrice.textContent = "$" + salePrice;
    } else {
      currentPrice.textContent = "$" + product.price;
    }
    const nameBox = document.createElement("div");
    nameBox.classList.add("name-box");
    nameBox.appendChild(name);
    pricesBox.appendChild(oldPrice);
    pricesBox.appendChild(currentPrice);

    content.appendChild(nameBox);
    content.appendChild(pricesBox);

    productLink.appendChild(content);
    card.appendChild(productLink);

    const infoLink = document.createElement("a");
    infoLink.classList.add("product-a");
    infoLink.href = product.href;
    const info = document.createElement("div");
    info.classList.add("card-info");
    info.textContent = "View more";
    infoLink.appendChild(info);
    card.appendChild(infoLink);

    cardContainer.appendChild(card);
  }

  function removeAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.remove());
  }

  // Function to update HTML with items
  function updateHTML(items) {
    removeAllCards();
    items.forEach((item) => addProductCard(item));
  }

  // Event listener to update HTML when the page loads
  document.addEventListener("click", () => {
    checkOnValidPrice();
  });

  sizeBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.checked) {
        activeSizes.push(box.value);
        updateHTML(filterAll(Objects));
      } else {
        const deleteIndex = activeSizes.indexOf(box.value);
        activeSizes.splice(deleteIndex, 1);
        updateHTML(filterAll(Objects));
      }
    });
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
          updateHTML(filterAll(Objects));
        } else {
          const deleteIndex = activeValues[parameterID].indexOf(box.value);
          activeValues[parameterID].splice(deleteIndex, 1);
          updateHTML(filterAll(Objects));
        }
      });
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sortValue = button.id;
      console.log(sortValue);
      updateHTML(filterAll(Objects));
    });
  });

  // Event listener to check if the prices are valid
  priceSubmitBtn.addEventListener("click", () => {
    updateHTML(filterAll(Objects));
  });

  // Event listener to update HTML when the page loads
  window.addEventListener("load", () => {
    updateHTML(sortItems(Objects));
  });
}

export { startFiltering };
