function productControll(productObj) {
  function updateHTML(obj) {
    const mainContainer = document.querySelector(".main-container");

    // create img
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = obj.name.slice(0, 1).toUpperCase + obj.name.slice(1);

    imgContainer.appendChild(img);

    // create info container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const nameBox = document.createElement("div");
    nameBox.classList.add("name-box");
    nameBox.textContent = obj.name;

    const priceBox = document.createElement("div");
    priceBox.classList.add("price-box");

    // create priceElements
    const currentPrice = document.createElement("span");
    currentPrice.classList.add("current-price");
    const oldPrice = document.createElement("span");
    oldPrice.classList.add("old-price");
    if (obj.sale > 0) {
      currentPrice.textContent =
        String(Math.ceil(obj.price - obj.price * obj.sale)) + " $ ";
      oldPrice.textContent = String(obj.price) + " $ ";
    } else if (obj.sale === 0) {
      currentPrice.textContent = String(obj.price) + " $ ";
    }

    // add price elements to price box
    priceBox.appendChild(currentPrice);
    priceBox.appendChild(oldPrice);

    // create size dropdown
    const sizeDropdown = document.createElement("div");
    sizeDropdown.classList.add("size-dropdown");

    const dropdownToggle = document.createElement("div");
    dropdownToggle.classList.add("dropdown-toggle");
    dropdownToggle.id = "none";
    dropdownToggle.dataset.toggle = "dropdown";
    dropdownToggle.setAttribute("aria-haspopup", true);
    dropdownToggle.setAttribute("aria-expanded", false);
    dropdownToggle.textContent = "Select Size";

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");

    // create the size dropdown items
    for (const size of obj.size) {
      const dropdownItem = document.createElement("a");
      dropdownItem.classList.add("dropdown-item");
      dropdownItem.id = size;
      dropdownItem.textContent = size;

      dropdownMenu.appendChild(dropdownItem);
    }

    // add the size dropdown elements to the size dropdown container
    sizeDropdown.appendChild(dropdownToggle);
    sizeDropdown.appendChild(dropdownMenu);

    const addButtonBox = document.createElement("div");
    addButtonBox.classList.add("add-button-box");

    const addButton = document.createElement("div");
    addButton.classList.add("add-button");
    addButton.id = "dropdownMenuButton";
    addButton.dataset.toggle = "dropdown";
    addButton.setAttribute("aria-haspopup", true);
    addButton.setAttribute("aria-expanded", false);
    addButton.textContent = "Add to cart";

    // add the add button element to the add button box
    addButtonBox.appendChild(addButton);

    // create the buttons container
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    // add the size dropdown and add button box to the buttons container
    buttons.appendChild(sizeDropdown);
    buttons.appendChild(addButtonBox);

    const info = document.createElement("div");
    info.classList.add("info");
    const description = document.createElement("p");
    description.classList.add("text");
    description.textContent = obj.info;
    const parameters = document.createElement("div");
    parameters.classList.add("parameters");
    const gender = document.createElement("div");
    gender.classList.add("gender");
    const genderValue = document.createElement("span");
    genderValue.classList.add("gender-value");
    genderValue.textContent =
      obj.sex.slice(0, 1).toUpperCase() + obj.sex.slice(1);
    gender.appendChild(genderValue);
    const brand = document.createElement("div");
    brand.classList.add("brand");
    const brandValue = document.createElement("span");
    brandValue.classList.add("brand-value");
    brandValue.textContent =
      obj.brand.slice(0, 1).toUpperCase() + obj.brand.slice(1);
    brand.appendChild(brandValue);
    const type = document.createElement("div");
    type.classList.add("type");
    const typeValue = document.createElement("span");
    typeValue.classList.add("type-value");
    typeValue.textContent =
      obj.type.slice(0, 1).toUpperCase() + obj.type.slice(1);
    type.appendChild(typeValue);

    parameters.appendChild(gender);
    parameters.appendChild(brand);
    parameters.appendChild(type);

    info.appendChild(description);
    info.appendChild(parameters);
    infoContainer.appendChild(nameBox);
    infoContainer.appendChild(priceBox);
    infoContainer.appendChild(buttons);
    infoContainer.appendChild(info);

    mainContainer.appendChild(imgContainer);
    mainContainer.appendChild(infoContainer);
  }

  updateHTML(productObj);
  const sizeItems = document.querySelectorAll(".dropdown-item");
  const addToCartBtn = document.querySelector(".add-button");
  const login = true; // Тут будет проверка на то, что пользоваетель зарегестрирован
  const alert = document.querySelector(".alert");
  const alertText = alert.querySelector("h2");
  const closeIcon = alert.querySelector(".icon-close-alert");
  const submitBtn = alert.querySelector(".alert-btn");
  let userSize = "none";

  addToCartBtn.addEventListener("click", () => {
    if (userSize !== "none" && login !== false) {
      // Adding to cart procces
      alertText.textContent = "Added to cart!";
      alert.classList.add("active");
      console.log("+");
    }
    if (userSize === "none") {
      alertText.textContent = "First, choose a size!";
      alert.classList.add("active");
    }
    if (login === false) {
      alertText.textContent = "Login first!";
      alert.classList.add("active");
    }
  });

  sizeItems.forEach((item) => {
    item.addEventListener("click", () => {
      userSize = item.id;
      console.log(userSize);
    });
  });

  document.addEventListener("click", (event) => {
    if (
      (!alert.contains(event.target) && !addToCartBtn.contains(event.target)) ||
      closeIcon.contains(event.target) ||
      submitBtn.contains(event.target)
    ) {
      alert.classList.remove("active");
    }
  });
}

export { productControll };
