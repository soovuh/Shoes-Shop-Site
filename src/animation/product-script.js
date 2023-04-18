const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownToggle.textContent = item.textContent;
    dropdownMenu.classList.remove("show");
    dropdownToggle.classList.remove("show");
  });
});

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
  dropdownToggle.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInside =
    dropdownToggle.contains(event.target) ||
    dropdownMenu.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.classList.remove("show");
    dropdownToggle.classList.remove("show");
  }
});
