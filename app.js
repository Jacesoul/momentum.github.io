const h1 = document.querySelector("div.hello:first-child h1"); // CSS selector

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
// handleTitleClick 자바스크립트에게 실행할수 있도록 ()를 제외하고 전달
