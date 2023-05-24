import { categoriesAnimation } from "../animation/categories-script.js";
import { startFiltering } from "../controllers/categories-control.js";

async function getObjs(url) {
  const resp = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  const data = await resp.json();
  return data;
}

async function filterShoesBySex() {
  const shoesObjs = await getObjs("http://127.0.0.1:8000/shoe/");
  const brandObjs = await getObjs("http://127.0.0.1:8000/brand/");

  // Filtering shoes objects by sex

  const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

  startFiltering(manObjects, brandObjs);
  categoriesAnimation();
}

await filterShoesBySex();
