const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }`;
}

getClock();
setInterval(getClock, 1000);
