// Importing necessary modules
import { shoesObjs } from "../database.js";
import { categoriesAnimation } from "../animation/categories-script.js";
import { startFiltering } from "../controllers/man-control.js";

// Filtering shoes objects by sex
const manObjects = shoesObjs.filter((obj) => obj.sex === "male");

startFiltering(manObjects);

categoriesAnimation();
