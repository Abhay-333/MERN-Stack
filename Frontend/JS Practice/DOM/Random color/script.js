// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

const btn = document.querySelector("button");
const container = document.querySelector(".container");

console.log()

const containerWidth = parseInt(getComputedStyle(container).width);
const cardWidth = 240;
const gap = 20;

// inclusive range
function generateRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberOfColumn = Math.floor(containerWidth / (cardWidth + gap)); // 1200px container ka size, 240px card ka width, 20px gap between cards
const columnHeights = new Array(numberOfColumn).fill(0);
let idCounter = 0

btn.addEventListener("click", function () {
  const rgba = `rgba(${generateRandomRange(0,255)}, ${generateRandomRange(0,255)}, ${generateRandomRange(0,255)})`;
  const randomHeight = generateRandomRange(200, 500);

  let minIndex = 0
  
  for (let i = 1; i < columnHeights.length; i++) {
    if(columnHeights[i] < columnHeights[minIndex]){
      minIndex = i
    }
  }

  // calculate the position of card
  const left = minIndex * (cardWidth + gap);
  const top = columnHeights[minIndex];
  
  const card = document.createElement("div");
  card.setAttribute("data-id",idCounter++)
  card.style.position = "absolute";
  card.style.width = cardWidth + "px";
  card.style.height = randomHeight + "px";
  card.style.borderRadius = "10px";
  card.style.left = left + "px";
  card.style.top = top + "px";
  card.style.backgroundColor = rgba;

  container.appendChild(card);

  // jaha pe kum height wala div hai vaha pe dusra div add karo
  columnHeights[minIndex] += randomHeight + gap
  
  // aab container ki height adjust karo
  container.style.height = Math.max(...columnHeights) + "px"

});
