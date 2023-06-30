import { profileControlStart } from "../controllers/profile-control.js";
import { baseLink } from "../constants.js";
import {
  getCookie,
  checkAuthentication,
} from "../controllers/authentication_check.js";

const csrfToken = getCookie("csrftoken");
const sessionId = getCookie("sessionid");
const isAuthenticated = await checkAuthentication(csrfToken, sessionId);

if (!isAuthenticated) {
  window.location.href = "login.html";
}

async function getuserInfo() {
  const csrfToken = getCookie("csrftoken");
  const sessionId = getCookie("sessionid");
  const resp = await fetch(`${baseLink}/accounts/get_user_info/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-CSRFToken": csrfToken,
      Cookie: `sessionid=${sessionId}`,
    },
    credentials: "include",
  });

  const data = await resp.json();
  return data;
}

async function getuserOrders() {
  const csrfToken = getCookie("csrftoken");
  const sessionId = getCookie("sessionid");
  const resp = await fetch(`${baseLink}/orders/get_user_orders/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-CSRFToken": csrfToken,
      Cookie: `sessionid=${sessionId}`,
    },
    credentials: "include",
  });
  const data = await resp.json();
  return data;
}
const orderInfo = await getuserOrders();
const userInfo = await getuserInfo();
profileControlStart(userInfo, orderInfo);
document.querySelector("#loader").style.display = "none";
