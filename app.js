const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본적으로 작동하는것을 막는다.
  console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

/*
addEventListener가 handleLinkClick 함수를 실행할때 하는 일 
아래와 같이 handleLinkClick함수를 실행시키는 동시에 
그 함수 첫번째 인자로 이벤트가 일어나는 정보의 object를 넣어준다. 
handleLinkClick({information about the event that just happened})
*/
