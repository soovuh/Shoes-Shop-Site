import { cartFill, boxControll } from "../controllers/cart-control.js";
import {
  checkAuthentication,
  getCookie,
} from "../controllers/authentication_check.js";
import { baseLink } from "../constants.js";

async function get_cart() {
  const csrfToken = getCookie("csrftoken");
  const sessionId = getCookie("sessionid");
  const resp = await fetch(`${baseLink}/cart/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-CSRFToken": csrfToken,
      Cookie: `sessionid=${sessionId}`,
    },
    credentials: "include",
  });
  const cartObjs = await resp.json();
  const isAuthenticated = await checkAuthentication(csrfToken, sessionId);
  cartFill(cartObjs);
  boxControll(cartObjs, isAuthenticated);
  document.querySelector("#loader").style.display = "none";
}

await get_cart();
