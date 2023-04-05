const filterButton = document.querySelector(".filter-button");
const filter = document.querySelector(".filter");
const IconCloseFilter = document.querySelector(".icon-close-filter");

// dropdown menu
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownToggle.textContent = item.textContent;
    dropdownMenu.classList.remove("show");
  });
});

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInside =
    dropdownToggle.contains(event.target) ||
    dropdownMenu.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.classList.remove("show");
  }
});
// end of dropdown menu

IconCloseFilter.addEventListener("click", () => {
  filter.classList.remove("active");
});

filterButton.addEventListener("click", () => {
  filter.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!filter.contains(event.target) && !filterButton.contains(event.target)) {
    filter.classList.remove("active");
  }
});

function checkScreenWidthforFilter() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 850) {
    filter.classList.remove("active");
  }
}

window.addEventListener("resize", function () {
  checkScreenWidthforFilter();
});
