import { fillCarousel, fillHotDeals } from "../controllers/index-control.js";
import { indexAnimation } from "../animation/index-script.js";

const cardContainer = document.querySelector(".cards-container");
const carousel = document.querySelector(".carousel");
const carouselImg = document.querySelector(".carousel-imgs");
const arrowIcons = document.querySelectorAll(".carousel .icon");

await fillHotDeals(cardContainer);
await fillCarousel(carouselImg);

document.querySelector("#loader").style.display = "none";
indexAnimation(carousel, arrowIcons);
