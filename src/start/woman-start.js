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
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");
  if (search) {
    const shoesObjsSearch = await getObjs(
      `http://127.0.0.1:8000/shoe/?search=${search}`
    );
    const brandObjsSearch = await getObjs("http://127.0.0.1:8000/brand/");
    const womanObjectsSearch = shoesObjsSearch.filter(
      (obj) => obj.sex === "female"
    );
    const womanbtn = document.querySelector(".woman");
    const manbtn = document.querySelector(".man");
    const searchResult = document.querySelector(".result_search");
    searchResult.innerHTML = search;
    manbtn.href = `man.html?search=${search}`;
    womanbtn.href = `woman.html?search=${search}`;

    startFiltering(womanObjectsSearch, brandObjsSearch);
    categoriesAnimation();
  } else {
    const shoesObjs = await getObjs(`http://127.0.0.1:8000/shoe/`);
    const brandObjs = await getObjs("http://127.0.0.1:8000/brand/");
    const womanObjects = shoesObjs.filter((obj) => obj.sex === "female");
    startFiltering(womanObjects, brandObjs);
    categoriesAnimation();
  }
}

await filterShoesBySex();
