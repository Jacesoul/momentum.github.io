const images = [
  "elizaveta-zaburunova-wwlaFORBkmU-unsplash.jpg",
  "surface-RdVLp18cl9M-unsplash.jpg",
  "yuliia-tretynychenko-7yanR6kV6bY-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
