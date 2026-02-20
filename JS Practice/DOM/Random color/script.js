// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

const btn = document.querySelector("button");
const container = document.querySelector(".container");

const containerWidth = 1200
const cardWidth = 240
const gap = 20


// inclusive range
function generateRandomColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomColor(1,20))
const numberOfColumn = Math.floor(1200 / 260); // 1200px container ka size, 240px card ka width, 20px gap between cards
const columnHeights = new Array(numberOfColumn).fill(0);

btn.addEventListener("click", function () {
  const rgba = `rgba(${generateRandomColor(256)}, ${generateRandomColor(256)}, ${generateRandomColor(256)}, ${Math.random().toFixed(3)})`;

  const randomHeight = () => Math.floor(Math.random() * (500 - 200 + 1) + 200);

  for (let i = 0; i < columnHeights.length; i++) {
    columnHeights[i] = randomHeight();
  }

  let i = 0,
    j = columnHeights.length - 1;
  while (i <= j) {
    if (columnHeights[i] <= columnHeights[j]) {
      j--;
    } else {
      i++;
    }
  }

  console.log(columnHeights);
  let columnIndex = i;
  columnHeights[i] += 260;

  const card = document.createElement("div");
  const left = columnIndex * 260;
  const top = columnHeights[columnIndex];
  console.log(left, top);

  card.style.height = randomHeight + "px";
  card.style.width = 240 + "px";
  card.style.borderRadius = "10px";
  card.style.position = "absolute";
  card.style.left = left + "px";
  card.style.top = top + "px";

  card.style.backgroundColor = rgba;

  container.appendChild(card);
});
