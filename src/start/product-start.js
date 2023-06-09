import { productControll } from "../controllers/product-control.js";
import { productAnimation } from "../animation/product-script.js";
import { baseLink } from "../constants.js";

async function getObjs(url) {
  const resp = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  const data = await resp.json();
  return data;
}

async function incrementViews(productId) {
  await fetch(`${baseLink}/shoe/${productId}/increment_views/`, {
    method: "POST",
    mode: "cors",
  });
}

async function getShoeById() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const shoesObj = await getObjs(`${baseLink}/shoe/` + productId);

  incrementViews(productId);
  await productControll(shoesObj);

  document.querySelector("#loader").style.display = "none";
  productAnimation();
}

getShoeById();
