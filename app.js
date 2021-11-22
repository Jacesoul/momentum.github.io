const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본적으로 작동하는것을 막는다.
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
