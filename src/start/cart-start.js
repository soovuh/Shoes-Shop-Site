import { cartFill, boxControll } from "../controllers/cart-control.js";
import { cartExample } from "../database.js";

cartFill(cartExample);
boxControll(cartExample);