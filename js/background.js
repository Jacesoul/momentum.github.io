// const images = [
//   "elizaveta-zaburunova-wwlaFORBkmU-unsplash.jpg",
//   "surface-RdVLp18cl9M-unsplash.jpg",
//   "yuliia-tretynychenko-7yanR6kV6bY-unsplash.jpg",
// ];
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const createRandomNum = (max) => Math.floor(Math.random() * max);
const colorLength = colors.length - 1;
const color1 = createRandomNum(colorLength);
const color2 = createRandomNum(colorLength);
document.body.style.background = `linear-gradient(to left,${colors[color1]}, ${colors[color2]})`;
