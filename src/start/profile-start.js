import { profileControlStart } from "../controllers/profile-control.js";
import { baseLink } from "../constants.js";
import { getCookie } from "../controllers/authentication_check.js";

document.querySelector("#loader").style.display = "none";

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

const userInfo = await getuserInfo();

profileControlStart(userInfo);
