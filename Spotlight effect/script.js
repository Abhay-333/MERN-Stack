git const revealMe = document.querySelector(".box h1");
const box = document.querySelector(".box");
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = revealMe.innerText;

let x, y;

function spotLight() {
  revealMe.addEventListener("mouseenter", () => {
    console.log(x, y);
    document.body.style.setProperty("--x", x + 1000 + "px");
    document.body.style.setProperty("--y", y + 1000 + "px");
    box.style.opacity = 0;
  });

  revealMe.addEventListener("mouseleave", () => {
    box.style.opacity = 1;
  });

  addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
    x = e.clientX;
    y = e.clientY;
  });
}

function matrixEffect() {
  let iteration = 0;
  let intervalId = null;

  revealMe.addEventListener("mouseenter", () => {
    if(intervalId)return
    iteration = 0 
    intervalId = setInterval(() => {
      const str = text
        .split("")
        .map((character, index) => {
          if (index < iteration) {
            return character;
          }
          return alphabets.split("")[
            Math.floor(Math.random() * alphabets.length)
          ];
        })
        .join("");
      revealMe.innerText = str;
      iteration += 0.5;
      console.log(intervalId)
      if(iteration >= text.length){
        clearInterval(intervalId)
        intervalId = null
        revealMe.innerText = text
      }
    }, 30);
  });
}

spotLight();
// matrixEffect();
