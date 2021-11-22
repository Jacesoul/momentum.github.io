const h1 = document.querySelector("div.hello:first-child h1"); // CSS selector

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
// handleTitleClick 자바스크립트에게 실행할수 있도록 ()를 제외하고 전달
