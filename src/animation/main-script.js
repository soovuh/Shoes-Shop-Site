import {
  getCookie,
  checkAuthentication,
} from "../controllers/authentication_check.js";

const toggler = document.querySelector(".toggler");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
const searchButton = document.querySelector(".search-button");
const logoMini = document.querySelector(".logo-mini");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const loginBtn = document.querySelector(".btnLogin-popup");

const csrfToken = getCookie("csrftoken");
const sessionId = getCookie("sessionid");
const isAuthenticated = await checkAuthentication(csrfToken, sessionId);
console.log(isAuthenticated);

searchBtn.addEventListener("click", () => {
  const baseLink = "man.html";
  const search = searchInput.value;
  if (search === "") {
    window.location.href = baseLink;
  } else {
    window.location.href = baseLink + "?search=" + search;
  }
});

searchInput.addEventListener("focus", () => {
  logoMini.classList.add("off");
  toggler.classList.add("off");
});

document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target) && !toggler.contains(event.target)) {
    navigation.classList.remove("show");
    toggler.classList.remove("show");
  }
});

searchInput.addEventListener("blur", () => {
  logoMini.classList.remove("off");
  toggler.classList.remove("off");
});

toggler.addEventListener("click", () => {
  navigation.classList.toggle("show");
  toggler.classList.toggle("show");
});

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1000) {
    navigation.classList.remove("show");
    toggler.classList.remove("show");
  }
}

window.addEventListener("resize", function () {
  checkScreenWidth();
});
