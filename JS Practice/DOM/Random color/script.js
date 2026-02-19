// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

const btn = document.querySelector("button");
const container = document.querySelector(".container");

// inclusive range
function generateRandomColor(end) {
  return Math.floor(Math.random() * end);
}

const numberOfColumn = Math.floor(1200 / 260); // 1200px container ka size, 240px card ka width, 20px gap between cards
const columnHeights = new Array(numberOfColumn)

btn.addEventListener("click", function () {
  const rgba = `rgba(${generateRandomColor(256)}, ${generateRandomColor(256)}, ${generateRandomColor(256)}, ${Math.random().toFixed(3)})`;

  const randomHeight = Math.floor(Math.random() * (500 - 200 + 1) + 200);
  
  columnHeights.unshift(randomHeight)
  console.log(columnHeights)

  for(let i = 0; i < columnHeights.length; i++){
    
    // if(columnHeights[i] <){

    // }
  }

  const div = document.createElement("div");
  div.style.height = randomHeight + "px";
  div.style.width = 240 + "px";
  div.style.borderRadius = "10px";
  div.style.flexShrink = 0;

  div.style.backgroundColor = rgba;
  container.appendChild(div);
});
