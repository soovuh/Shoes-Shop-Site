import { categoriesAnimation } from "../animation/categories-script.js";
import { shoesObjs } from "../database.js";
import { startFiltering } from "../controllers/woman-control.js";

const womanObjects = shoesObjs.filter((obj) => obj.sex === "female");

startFiltering(womanObjects);
categoriesAnimation();
