const revealMe = document.querySelector(".box button");
let x, y;

revealMe.addEventListener("mouseenter", () => {
  console.log(x, y);
  document.body.style.setProperty("--x", x + 1000 + "px");
  document.body.style.setProperty("--y", y + 1000 + "px");
});

addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
  x = e.clientX;
  y = e.clientY;
});
