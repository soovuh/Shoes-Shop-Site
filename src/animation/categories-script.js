const filterButton = document.querySelector(".filter-button");
const filter = document.querySelector(".filter");
const IconCloseFilter = document.querySelector(".icon-close-filter");

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
