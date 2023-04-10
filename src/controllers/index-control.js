// Simulating a request
import { carouselObjs } from "../database.js";

// Add images from database.js to carousel
function fillCarousel(carousel) {
  const carouselLinks = carouselObjs.map((obj) => {
    const link = document.createElement("a");
    link.href = "#";
    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = "";
    link.appendChild(img);
    return link;
  });
  carouselLinks.forEach((link) => {
    carousel.appendChild(link);
  });
}

export { fillCarousel };
