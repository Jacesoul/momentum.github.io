const h1 = document.querySelector("div.hello:first-child h1"); // CSS selector

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
// handleTitleClick 자바스크립트에게 실행할수 있도록 ()를 제외하고 전달
