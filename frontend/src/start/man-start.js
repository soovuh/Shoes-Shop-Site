import { categoriesAnimation } from "../animation/categories-script.js";
import { startFiltering } from "../controllers/categories-control.js";
import { baseLink } from "../constants.js";

async function getObjs(url) {
  const resp = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  const data = await resp.json();
  return data;
}

async function filterShoesBySex() {
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");
  if (search) {
    const shoesObjsSearch = await getObjs(`${baseLink}/shoe/?search=${search}`);
    const brandObjsSearch = await getObjs(`${baseLink}/brand/`);
    const manObjectsSearch = shoesObjsSearch.filter(
      (obj) => obj.sex === "male"
    );
    const womanbtn = document.querySelector(".woman");
    const searchResult = document.querySelector(".result_search");
    const manbtn = document.querySelector(".man");
    searchResult.innerHTML = search;
    womanbtn.href = `woman.html?search=${search}`;
    manbtn.href = `man.html?search=${search}`;

    startFiltering(manObjectsSearch, brandObjsSearch);
    categoriesAnimation();
  } else {
    const shoesObjs = await getObjs(`${baseLink}/shoe/`);
    const brandObjs = await getObjs(`${baseLink}/brand/`);
    const manObjects = shoesObjs.filter((obj) => obj.sex === "male");
    startFiltering(manObjects, brandObjs);
    categoriesAnimation();
  }
}

await filterShoesBySex();
