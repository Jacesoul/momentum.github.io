const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본적으로 작동하는것을 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

/*
addEventListener가 handleLinkClick 함수를 실행할때 하는 일 
아래와 같이 handleLinkClick함수를 실행시키는 동시에 
그 함수 첫번째 인자로 이벤트가 일어나는 정보의 object를 넣어준다. 
handleLinkClick({information about the event that just happened})
*/
