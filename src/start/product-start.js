import { productControll } from "../controllers/product-control.js";
import { productAnimation } from "../animation/product-script.js";
import { productObj } from "../database.js"; // тут будет запрос на объект через API

productControll(productObj);
productAnimation();
