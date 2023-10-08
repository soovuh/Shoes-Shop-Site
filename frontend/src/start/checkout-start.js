import {
  checkAuthentication,
  getCookie,
} from "../controllers/authentication_check.js";
import { baseLink } from "../constants.js";
import {
  orderShoesFill,
  orderUserFill,
} from "../controllers/checkout-controll.js";

async function get_order() {
  const csrfToken = getCookie("csrftoken");
  const sessionId = getCookie("sessionid");
  const cartResp = await fetch(`${baseLink}/cart/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-CSRFToken": csrfToken,
      Cookie: `sessionid=${sessionId}`,
    },
    credentials: "include",
  });
  const cartObjs = await cartResp.json();
  const userResp = await fetch(`${baseLink}/accounts/get_user_info/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-CSRFToken": csrfToken,
      Cookie: `sessionid=${sessionId}`,
    },
    credentials: "include",
  });
  const userObj = await userResp.json();
  const isAuthenticated = await checkAuthentication(csrfToken, sessionId);
  orderShoesFill(cartObjs);
  orderUserFill(userObj);
  document.querySelector("#loader").style.display = "none";
}

await get_order();
