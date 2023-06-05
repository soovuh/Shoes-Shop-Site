import { baseLink } from "../constants.js";
import { getCookie } from "./authentication_check.js";

function profileControlStart() {
  const logoutBtn = document.querySelector(".logout");

  logoutBtn.addEventListener("click", () => {
    document.cookie =
      "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "../../public/pages/login.html";
  });
}

export { profileControlStart };
