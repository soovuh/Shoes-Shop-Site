import { baseLink } from "../constants.js";
function getCookie(name) {
  const cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");

    if (cookiePair[0].trim() === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
}

async function checkAuthentication(csrfToken, sessionId) {
  if (sessionId) {
    const response = await fetch(`${baseLink}/accounts/check_authentication/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-CSRFToken": csrfToken,
        Cookie: `sessionid=${sessionId}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    if (
      data.message === "Session not found" ||
      data.message === "User not found"
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export { checkAuthentication, getCookie };
