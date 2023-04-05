const filterButton = document.querySelector(".filter-button");
const filter = document.querySelector(".filter");
const IconCloseFilter = document.querySelector(".icon-close-filter");
const customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (customSelect) {
  const select = customSelect.querySelector(".select");
  const dropdown = customSelect.querySelector(".dropdown");
  const options = dropdown.querySelectorAll("a");
  window.addEventListener("click", (event) => {
    if (!dropdown.contains(event.targer) && !select.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
  select.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      select.value = option.dataset.value;
      dropdown.classList.remove("show");
    });
  });
});

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
