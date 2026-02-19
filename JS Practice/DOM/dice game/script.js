// # Intermediate Level DOM + Math Practice Tasks

// ## 1. Dice Game

// Create two dice images dynamically using `document.createElement()`. Use
// `Math.random()` to generate numbers (1--6). Display both dice results
// and show the winner based on the higher number. Render everything
// dynamically using `append()` or `appendChild()`.

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn = document.querySelector(".btn");

const dicePattern = {
  // ye grid ki position hai
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 3, 6, 2, 5, 8],
};

const h1 = document.createElement("h1");

function createDice(diceElement) {
  const player1 = Math.floor(Math.random() * 6) + 1;

  let dots = [];
  console.log(player1);

  // position define ki hai 3x3 ka matrix mey
  for (let i = 0; i < 9; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    diceElement.appendChild(dot);
    dots.push(dot);
  }

  // ab according to the required pattern we are printing dots
  const pattern = dicePattern[player1];
  pattern.forEach((index) => {
    dots[index].style.opacity = 1;
  });
  return player1
}

btn.addEventListener("click", function () {
  // h1.textContent =""
  dice1.innerHTML = "";
  dice2.innerHTML = "";
  
  const player1 = createDice(dice1);
  const AI = createDice(dice2);

  if (player1 > AI) {
    h1.textContent = "Winner!!!";
    box1.appendChild(h1);
  } else if (AI > player1) {
    h1.textContent = "Winner!!!";
    box2.appendChild(h1);
  } else {
    h1.textContent = "";
  }

});
