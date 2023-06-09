import { cartFill, boxControll } from "../controllers/cart-control.js";
import { getCookie } from "../controllers/authentication_check.js";
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
  cartFill(cartObjs);
  boxControll(cartObjs);
  document.querySelector("#loader").style.display = "none";
}

await get_cart();
