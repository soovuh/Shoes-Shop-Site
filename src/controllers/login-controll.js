const baseLink = "http://127.0.0.1:8000";
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".form-box.login form");
  const registerForm = document.querySelector(".form-box.register form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    fetch(`${baseLink}/accounts/login/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.cookie = `csrftoken=${data.csrf_token}; path=/`;
        document.cookie = `sessionid=${data.session_id}; path=/`;

        console.log(data); // Do something with response data
      })
      .catch((error) => {
        console.error(error);
      });
  });

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    fetch(`${baseLink}/accounts/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

// function getCookie(name) {
//   const cookieArr = document.cookie.split(";");

//   for (let i = 0; i < cookieArr.length; i++) {
//     const cookiePair = cookieArr[i].split("=");

//     if (cookiePair[0].trim() === name) {
//       return decodeURIComponent(cookiePair[1]);
//     }
//   }

//   return null;
// }

// const csrfToken = getCookie("csrftoken");
// const sessionId = getCookie("sessionid");
// fetch(`${baseLink}/accounts/get_username/`, {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "X-CSRFToken": csrfToken,
//     Cookie: `sessionid=${sessionId}`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
