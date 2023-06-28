import {
  checkAuthentication,
  getCookie,
} from "../controllers/authentication_check.js";
import { baseLink } from "../constants.js";

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
  const cartObj = await cartResp.json();
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
  document.querySelector("#loader").style.display = "none";
  console.log(cartObj, userObj);
}

await get_order();
