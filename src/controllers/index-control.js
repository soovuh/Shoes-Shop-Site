// Simulating a request
import { carouselObjs, hotDeals } from "../database.js";

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

function fillHotDeals(container) {
  // loop through each product in the array
  for (let i = 0; i < hotDeals.length; i++) {
    const product = hotDeals[i];

    // create the card element
    const card = document.createElement("div");
    card.classList.add("card");

    // create the image element and add it to the card
    const imageLink = document.createElement("a");
    imageLink.href = product.href;
    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = product.image;
    image.alt = "";
    imageLink.appendChild(image);
    card.appendChild(imageLink);

    // create the product name, old price, and current price elements and add them to the card
    const productLink = document.createElement("a");
    productLink.href = product.href;
    productLink.classList.add("product-a");
    const content = document.createElement("div");
    content.classList.add("card-content");
    const productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.textContent = product.name;
    const oldPrice = document.createElement("p");
    oldPrice.classList.add("old-price");
    oldPrice.textContent = product.price + " $";
    const currentPrice = document.createElement("p");
    currentPrice.classList.add("current-price");
    currentPrice.textContent =
      Math.round(product.price * (1 - product.sale)) + " $";
    content.appendChild(productName);
    content.appendChild(oldPrice);
    content.appendChild(currentPrice);
    productLink.appendChild(content);
    card.appendChild(productLink);

    // create the "view more" link and add it to the card
    const infoLink = document.createElement("a");
    infoLink.href = product.href;
    infoLink.classList.add("product-a");
    const info = document.createElement("div");
    info.classList.add("card-info");
    info.textContent = "View more";
    infoLink.appendChild(info);
    card.appendChild(infoLink);

    // add the card to the container
    container.appendChild(card);
  }
  
}

export { fillCarousel, fillHotDeals };
