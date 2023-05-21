import { categoriesAnimation } from "../animation/categories-script.js";
import { startFiltering } from "../controllers/categories-control.js";

async function getShoesObjs() {
  const resp = await fetch("http://127.0.0.1:8000/shoe/", {
    method: "GET",
    mode: "cors",
  });

  const data = await resp.json();
  return data;
}

async function filterShoesBySex() {
  const shoesObjs = await getShoesObjs();

  // Filtering shoes objects by sex
  console.log(shoesObjs)
  const manObjects = shoesObjs.filter((obj) => obj.sex === "male");
  console.log(shoesObjs);

  startFiltering(manObjects);
  categoriesAnimation();
}

filterShoesBySex();
