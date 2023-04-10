import { fillCarousel } from "../controllers/index-control.js";
import { indexAnimation } from "../animation/index-script.js";

const carousel = document.querySelector(".carousel");
const carouselImg = document.querySelector(".carousel-imgs");
const arrowIcons = document.querySelectorAll(".carousel .icon");

fillCarousel(carouselImg);
indexAnimation(carousel, arrowIcons);
